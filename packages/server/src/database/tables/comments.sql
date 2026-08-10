-- CREATE COMMENTS TABLE
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  page_id INT NOT NULL,
  user_id INT NOT NULL,
  in_reply_to INT DEFAULT NULL,
  in_reply_to_comment_reply INT DEFAULT NULL,
  read_by_page_owner BOOLEAN DEFAULT FALSE,
  loved_by_page_owner BOOLEAN DEFAULT FALSE,
  edited BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT fk_page FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT fk_in_reply_to FOREIGN KEY (in_reply_to) REFERENCES comments(id) ON DELETE CASCADE,
  CONSTRAINT fk_in_reply_to_reply FOREIGN KEY (in_reply_to_comment_reply) REFERENCES comments(id) ON DELETE SET NULL
);

-- Top-level comment listing and total count per page
CREATE INDEX IF NOT EXISTS idx_comments_page_toplevel
  ON comments (page_id, created_at DESC) WHERE in_reply_to IS NULL;

-- Reply lookups and per-comment reply counts
CREATE INDEX IF NOT EXISTS idx_comments_in_reply_to ON comments (in_reply_to);
