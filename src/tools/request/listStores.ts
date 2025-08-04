import { parse } from "graphql";
import { type GraphQLClient, gql } from "graphql-request";
import { match, P } from "ts-pattern";
import z from "zod";
import type { Result } from "../utils/result.ts";

const ErrorResponse = z.object({
  __typename: z.string(),
  message: z.string().optional(),
});

const StoreResponse = z
  .object({
    id: z.string(),
    plainId: z.string(),
    name: z.string(),
    isRepresentative: z.boolean(),
    v1Info: z
      .object({
        v1UserId: z.number(),
        userCode: z.string(),
        tierCode: z.string().optional(),
      })
      .or(ErrorResponse),
  })
  .transform(({ v1Info, ...store }) => ({
    ...match(v1Info)
      .with({ __typename: P.nonNullable }, () => ({}))
      .otherwise(({ v1UserId, ...rest }) => ({
        userId: v1UserId,
        ...rest,
      })),
    ...store,
  }));

export type StoreResponse = z.infer<typeof StoreResponse>;

const MerchantResponse = z.object({
  stores: z
    .object({
      items: z.array(StoreResponse),
    })
    .or(ErrorResponse),
});

const ListStoresResponse = z
  .object({
    merchant: MerchantResponse.transform(({ stores }) => stores).or(
      ErrorResponse,
    ),
  })
  .transform(({ merchant }) =>
    match(merchant)
      .with({ __typename: P.nonNullable }, ({ __typename, ...rest }) => ({
        error: __typename,
        ...rest,
      }))
      .otherwise(({ items }) => {
        const main = items.find(({ isRepresentative }) => isRepresentative);
        return {
          main,
          items: items.filter(({ isRepresentative }) => !isRepresentative),
        };
      }),
  );

export type ListStoresResponse = Exclude<
  z.infer<typeof ListStoresResponse>,
  { error: string }
>;

const listStoresQuery = parse(gql`
query ListStores {
  merchant {
    ... on Merchant {
      stores {
        ... on StoresPayload {
          items {
            ... on Store {
              id
              plainId
              name
              isRepresentative
              v1Info {
                ... on StoreV1Info {
                  v1UserId
                  userCode
                }
                ... on Error {
                  __typename
                  message
                }
              }
            }
          }
        }
        ... on Error {
          __typename
          message
        }
      }
    }
    ... on Error {
      __typename
      message
    }
  }
}
`);

export async function listStores({
  client,
  authorization,
}: {
  client: GraphQLClient;
  authorization: string;
}): Promise<Result<ListStoresResponse>> {
  try {
    const response = await client.request({
      document: listStoresQuery,
      requestHeaders: {
        authorization,
      },
    });
    const parsed = await ListStoresResponse.parseAsync(response);

    return match(parsed)
      .returnType<Result<ListStoresResponse>>()
      .with({ error: P.nonNullable }, ({ error, message }) => ({
        type: "error",
        data: {
          message,
          type: error,
        },
      }))
      .otherwise((stores) => ({
        type: "success",
        data: stores,
      }));
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: "error",
        data: error,
      };
    } else {
      return {
        type: "error",
        data: {
          message: `알 수 없는 오류가 발생했습니다.`,
          cause: error,
        },
      };
    }
  }
}
