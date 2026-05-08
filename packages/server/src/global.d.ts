declare module "ejs" {
  function renderFile(path: string, data?: Record<string, unknown>): Promise<string>;
}

declare module "swagger-ui-dist" {
  function getAbsoluteFSPath(): string;
}

declare module "yamljs" {
  function load(path: string): unknown;
}
