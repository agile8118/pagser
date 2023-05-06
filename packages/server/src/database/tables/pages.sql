-- CREATE PAGES TABLE
CREATE TABLE IF NOT EXISTS pages (
  id SERIAL PRIMARY KEY,
  type_id INT,
  status_id INT,
  title VARCHAR(200),
  brief_description TEXT,
  targets TEXT,
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
  CONSTRAINT fk_page_status FOREIGN KEY (status_id) REFERENCES page_statuses(id)
);