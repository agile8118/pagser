import { mockClient } from "aws-sdk-client-mock";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  ListObjectsV2Command,
  HeadBucketCommand,
  CreateBucketCommand,
  GetObjectCommand,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
  AbortMultipartUploadCommand,
} from "@aws-sdk/client-s3";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { Readable } from "node:stream";

export const s3Mock = mockClient(S3Client);
export const sesMock = mockClient(SESClient);

export function installAwsDefaults() {
  s3Mock.reset();
  sesMock.reset();

  s3Mock.on(PutObjectCommand).resolves({});
  s3Mock.on(DeleteObjectCommand).resolves({});
  s3Mock.on(DeleteObjectsCommand).resolves({});
  s3Mock.on(ListObjectsV2Command).resolves({ Contents: [] });
  s3Mock.on(HeadBucketCommand).resolves({});
  s3Mock.on(CreateBucketCommand).resolves({});
  s3Mock.on(GetObjectCommand).callsFake(() => ({
    Body: Readable.from(Buffer.from("mock-attach-bytes")) as any,
    ContentType: "application/octet-stream",
    ContentLength: 18,
  }));

  s3Mock.on(CreateMultipartUploadCommand).resolves({ UploadId: "test-upload-id" });
  s3Mock.on(UploadPartCommand).resolves({ ETag: '"abc"' });
  s3Mock.on(CompleteMultipartUploadCommand).resolves({});
  s3Mock.on(AbortMultipartUploadCommand).resolves({});

  sesMock.on(SendEmailCommand).resolves({ MessageId: "test-msg-id" });
}

export function sesSentEmails() {
  return sesMock.commandCalls(SendEmailCommand);
}

export function s3PutCalls() {
  return [
    ...s3Mock.commandCalls(PutObjectCommand),
    ...s3Mock.commandCalls(CreateMultipartUploadCommand),
  ];
}
