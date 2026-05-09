const getEnv = (key: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    console.error(`Missing environment variable: ${key}`);
  }
  return value || "";
};

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
};
