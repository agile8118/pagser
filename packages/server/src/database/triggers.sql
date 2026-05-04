CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now();
RETURN NEW;
END;
$$ language 'plpgsql';

-- Update triggers for users table
DROP TRIGGER IF EXISTS update_updated_at ON users;
CREATE TRIGGER update_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Update triggers for pages table
DROP TRIGGER IF EXISTS update_updated_at ON pages;
CREATE TRIGGER update_updated_at BEFORE UPDATE ON pages FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Update triggers for comments table
DROP TRIGGER IF EXISTS update_updated_at ON comments;
CREATE TRIGGER update_updated_at BEFORE UPDATE ON comments FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Update triggers for collections table
DROP TRIGGER IF EXISTS update_updated_at ON collections;
CREATE TRIGGER update_updated_at BEFORE UPDATE ON collections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Update triggers for history table
DROP TRIGGER IF EXISTS update_updated_at ON history;
CREATE TRIGGER update_updated_at BEFORE UPDATE ON history FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();