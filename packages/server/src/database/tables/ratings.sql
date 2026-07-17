-- CREATE RATINGS TABLE
CREATE TABLE IF NOT EXISTS ratings (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  page_id INT DEFAULT NULL,
  comment_id INT DEFAULT NULL,
  liked BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT fk_page FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE,
  CONSTRAINT fk_comment FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE
);

-- Like counts per comment and per page
CREATE INDEX IF NOT EXISTS idx_ratings_comment_id ON ratings (comment_id);
CREATE INDEX IF NOT EXISTS idx_ratings_page_id ON ratings (page_id);
