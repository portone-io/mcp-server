import type { ToolAnnotations } from "@modelcontextprotocol/sdk/types.js";
import type { ZodRawShape } from "zod";

export interface Frontmatter {
  title?: string;
  description?: string;
  targetVersions?: string[];
  allFieldsDict: Record<string, any>;
  rawString: string;
}

export interface MarkdownDocument {
  path: string;
  content: string;
  frontmatter?: Frontmatter;
}

export interface SchemaFile {
  content: string;
}

export interface Schema {
  openapiV1Json: SchemaFile;
  openapiV1Yml: any;
  openapiV2Json: SchemaFile;
  openapiV2Yml: any;
  browserSdkV2Yml: any;
  graphqlV2: SchemaFile;
}

export interface Documents {
  readme: string;
  markdownDocs: Record<string, MarkdownDocument>;
  schema: Schema;
}

export interface Resources {
  instructions: string;
  documents: Documents;
}

export interface SearchOccurrence {
  path: string;
  title?: string;
  targetVersions?: string[];
  content: string;
  matchedLines: string[];
  lineNumbers: number[];
}

export interface PaymentFilter {
  merchantId?: string;
  storeId?: string;
  paymentId?: string;
  transactionId?: string;
  textSearch?: string;
  status?: string;
  methods?: string[];
  pgProviders?: string[];
  isTest?: boolean;
  isScheduled?: boolean;
  sortBy?: string;
  sortOrder?: "ASC" | "DESC";
  from?: string;
  until?: string;
  cursor?: string;
  limit?: number;
}

export interface IdentityVerificationFilter {
  storeId?: string;
  status?: string;
  from?: string;
  until?: string;
  cursor?: string;
  limit?: number;
}
