declare module "swagger-ui-dist" {
  function getAbsoluteFSPath(): string;
}

declare module "yamljs" {
  function load(path: string): unknown;
}
