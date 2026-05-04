-- CREATE COLLECTION_PAGES TABLE
CREATE TABLE IF NOT EXISTS collection_pages (
  id SERIAL PRIMARY KEY,
  collection_id INT NOT NULL,
  page_id INT NOT NULL,
  order_index INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT fk_collection FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE,
  CONSTRAINT fk_page FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE,
  UNIQUE (collection_id, page_id)
);
