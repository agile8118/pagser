-- VALID PAGE STATUSES
CREATE TABLE IF NOT EXISTS page_statuses (id SERIAL PRIMARY KEY, status VARCHAR(200));
INSERT INTO page_statuses (status) -- in the future we could add 'archived'
VALUES ('published'),
  ('draft');