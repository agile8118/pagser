export default {
  // mongodb_url: process.env.MONGODB_URL,
  jwtSecret: process.env.JWTSECRET,
  sessionSecret: process.env.SESSIONSECRET,
  domain: process.env.DOMAIN,
  // accessKeyId: process.env.ACCESS_KEY_ID,
  // secretAccessKey: process.env.SECRET_ACCESS_KEY,
  mailgunApiKey: process.env.MAILGUN_API_KEY,
  dbUser: process.env.DB_USER,
  dbHost: process.env.DB_HOST,
  dbDatabase: process.env.DB_DATABASE,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: parseInt(process.env.DB_PORT || "5432"),
};
