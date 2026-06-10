/**
 * Object storage backend — uses Cloudflare R2 if R2 env vars are configured,
 * otherwise falls back to AWS S3. R2 is S3-API compatible, so the same
 * @aws-sdk/client-s3 commands work against either.
 */

import { S3Client } from "@aws-sdk/client-s3";
import keys from "../../config/keys.js";

export const useR2 = Boolean(
  keys.r2AccountId &&
    keys.r2AccessKeyId &&
    keys.r2SecretAccessKey &&
    keys.r2Bucket &&
    keys.r2PublicUrl,
);

export const storageClient = useR2
  ? new S3Client({
      region: "auto",
      endpoint: `https://${keys.r2AccountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: keys.r2AccessKeyId,
        secretAccessKey: keys.r2SecretAccessKey,
      },
    })
  : new S3Client({ region: keys.awsRegion });

export const storageBucket = useR2 ? keys.r2Bucket : keys.s3Bucket;

export function getPublicUrl(key: string): string {
  if (useR2) {
    return `${keys.r2PublicUrl}/${key}`;
  }
  return `https://${keys.s3Bucket}.s3.${keys.awsRegion}.amazonaws.com/${key}`;
}
