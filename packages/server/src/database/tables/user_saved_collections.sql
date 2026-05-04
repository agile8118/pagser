-- CREATE USER_SAVED_COLLECTIONS TABLE
CREATE TABLE IF NOT EXISTS user_saved_collections (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  collection_id INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT fk_collection FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE,
  UNIQUE (user_id, collection_id)
);
