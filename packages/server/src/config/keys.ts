const getEnv = (key: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    console.error(`Missing environment variable: ${key}`);
  }
  return value || "";
};

const getOptionalEnv = (key: string): string => process.env[key] || "";

// DB_TARGET picks the database: unset → DB_*, "test" → DB_TEST_*, "playwright" → DB_PLAYWRIGHT_*
const DB = process.env.DB_TARGET
  ? `DB_${process.env.DB_TARGET.toUpperCase()}`
  : "DB";

export default {
  domain: getEnv("DOMAIN"),
  cookieSecret: getEnv("COOKIE_SECRET"),
  tokenSecret: getEnv("TOKEN_SECRET"),
  // Postgres
  dbUser: getEnv(`${DB}_USER`),
  dbHost: getEnv(`${DB}_HOST`),
  dbDatabase: getEnv(`${DB}_DATABASE`),
  dbPassword: getEnv(`${DB}_PASSWORD`),
  dbPort: Number(getEnv(`${DB}_PORT`)),
  // AWS
  awsRegion: getEnv("AWS_REGION"),
  s3Bucket: getEnv("S3_BUCKET"),
  // Cloudflare R2 (optional — used instead of S3 if all of these are set)
  r2AccountId: getOptionalEnv("R2_ACCOUNT_ID"),
  r2AccessKeyId: getOptionalEnv("R2_ACCESS_KEY_ID"),
  r2SecretAccessKey: getOptionalEnv("R2_SECRET_ACCESS_KEY"),
  r2Bucket: getOptionalEnv("R2_BUCKET"),
  r2PublicUrl: getOptionalEnv("R2_PUBLIC_URL"),
};
