SET timezone TO 'GMT';
-- CREATE USERS TABLE
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  username VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  biography VARCHAR(200),
  headline VARCHAR(200),
  links_website VARCHAR(200),
  links_facebook VARCHAR(200),
  links_youtube VARCHAR(200),
  links_twitter VARCHAR(200),
  links_linkedin VARCHAR(200),
  photo_key VARCHAR(200),
  photo_url VARCHAR(200),
  verified BOOLEAN,
  token_code VARCHAR(200),
  token_date TIMESTAMP,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE (username),
  UNIQUE (email)
);