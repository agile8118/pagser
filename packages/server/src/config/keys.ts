import prod from "./prod.js";
import dev from "./dev.js";

export const AWS_REGION = process.env.AWS_REGION || "us-east-2";
export const S3_BUCKET = process.env.S3_BUCKET || "pagser-238476";

interface IObject {
  [key: string]: string;
}

let _toBeExported: any;

if (process.env.NODE_ENV === "production") {
  _toBeExported = prod;
} else {
  _toBeExported = dev;
}

export default _toBeExported as IObject;
