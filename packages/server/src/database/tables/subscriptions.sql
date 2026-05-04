-- CREATE SUBSCRIPTIONS TABLE
CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  subscriber_id INT NOT NULL,
  author_id INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT fk_subscriber FOREIGN KEY (subscriber_id) REFERENCES users(id),
  CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES users(id),
  UNIQUE (subscriber_id, author_id)
);
