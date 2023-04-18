-- VALID PAGE TYPES
CREATE TABLE IF NOT EXISTS page_types (id SERIAL PRIMARY KEY, type VARCHAR(200));
INSERT INTO page_types (type)
VALUES ('private'),
  ('public');