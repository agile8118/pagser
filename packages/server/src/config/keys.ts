import prod from "./prod.js";
import dev from "./dev.js";

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
