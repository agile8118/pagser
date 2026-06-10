const getEnv = (key: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    console.error(`Missing environment variable: ${key}`);
  }
  return value || "";
};

const getOptionalEnv = (key: string): string => process.env[key] || "";

export default {
  domain: getEnv("DOMAIN"),
  cookieSecret: getEnv("COOKIE_SECRET"),
  tokenSecret: getEnv("TOKEN_SECRET"),
  // Postgres
  dbUser: getEnv("DB_USER"),
  dbHost: getEnv("DB_HOST"),
  dbDatabase: getEnv("DB_DATABASE"),
  dbPassword: getEnv("DB_PASSWORD"),
  dbPort: Number(getEnv("DB_PORT")),
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
