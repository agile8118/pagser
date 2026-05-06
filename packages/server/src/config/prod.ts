export default {
  tokenSecret: process.env.TOKEN_SECRET,
  cookieSecret: process.env.COOKIE_SECRET,
  domain: process.env.DOMAIN,
  mailgunApiKey: process.env.MAILGUN_API_KEY,
  dbUser: process.env.DB_USER,
  dbHost: process.env.DB_HOST,
  dbDatabase: process.env.DB_DATABASE,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: parseInt(process.env.DB_PORT || "5432"),
};
