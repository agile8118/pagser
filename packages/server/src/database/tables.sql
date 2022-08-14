SET timezone TO 'GMT';
-- ************************* --
-- ********* USERS ********* --
-- ************************* --
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
-- ************************* --
-- ********* PAGES ********* --
-- ************************* --
-- VALID PAGE TYPES
CREATE TABLE page_types (id SERIAL PRIMARY KEY, type VARCHAR(200));
INSERT INTO page_types (type)
VALUES ('private'),
  ('public');
-- VALID PAGE STATUSES
CREATE TABLE page_statuses (id SERIAL PRIMARY KEY, status VARCHAR(200));
INSERT INTO page_statuses (type) -- in the future we could add 'archived'
VALUES ('published'),
  ('draft');
-- CRAETE PAGES TABLE
CREATE TABLE IF NOT EXISTS pages (
  id SERIAL PRIMARY KEY,
  type_id INT,
  status_id INT,
  title VARCHAR(200),
  brief_description VARCHAR(200),
  targets VARCHAR(200),
  body TEXT,
  anonymously BOOLEAN DEFAULT FALSE,
  comments_disabled BOOLEAN DEFAULT FALSE,
  ratings_disabled BOOLEAN DEFAULT FALSE,
  -- for public pages only:
  links_disabled BOOLEAN,
  url VARCHAR(200),
  cropped_photo_key VARCHAR(200),
  cropped_photo_url VARCHAR(200),
  photo_key VARCHAR(200),
  photo_url VARCHAR(200),
  user_id INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT fk_page_types FOREIGN KEY (type_id) REFERENCES page_types(id),
  CONSTRAINT fk_page_status FOREIGN KEY (status_id) REFERENCES page_statuses(id);
);
-- CRAETE TAGS TABLE
CREATE TABLE IF NOT EXISTS tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  page_id INT NOT NULL,
  CONSTRAINT fk_page FOREIGN KEY (page_id) REFERENCES pages(id),
);
-- CRAETE ATTACH FILES TABLE
CREATE TABLE IF NOT EXISTS attach_files (
  id SERIAL PRIMARY KEY,
  key VARCHAR(200) NOT NULL,
  url VARCHAR(200) NOT NULL,
  page_id INT NOT NULL,
  CONSTRAINT fk_page FOREIGN KEY (page_id) REFERENCES pages(id),
);