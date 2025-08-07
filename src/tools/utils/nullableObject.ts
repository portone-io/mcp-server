import type z from "zod";

export function nullableObject<T extends z.ZodRawShape>(
  shape: T,
): {
  [K in keyof T]: z.ZodNullable<T[K]>;
} {
  return Object.fromEntries(
    Object.entries(shape).map(([key, value]) => [key, value.nullable()]),
  ) as any;
}
