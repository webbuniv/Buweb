-- Run this in the Supabase SQL Editor if you encounter issues with automatic table creation

-- Create crawled_pages table
CREATE TABLE IF NOT EXISTS crawled_pages (
  id SERIAL PRIMARY KEY,
  url TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  links TEXT[] NOT NULL,
  last_crawled TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create university_data table
CREATE TABLE IF NOT EXISTS university_data (
  id SERIAL PRIMARY KEY,
  page_id INTEGER REFERENCES crawled_pages(id),
  data_type TEXT NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create crawl_queue table
CREATE TABLE IF NOT EXISTS crawl_queue (
  id SERIAL PRIMARY KEY,
  url TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed BOOLEAN DEFAULT FALSE
);

-- Create visited_urls table
CREATE TABLE IF NOT EXISTS visited_urls (
  id SERIAL PRIMARY KEY,
  url TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data
INSERT INTO crawled_pages (url, title, content, links)
VALUES (
  'https://bugemauniv.ac.ug',
  'Bugema University',
  'Sample content from Bugema University',
  ARRAY[]::TEXT[]
)
ON CONFLICT (url) DO NOTHING;

-- Get the ID of the inserted page
DO $$
DECLARE
  page_id INTEGER;
BEGIN
  SELECT id INTO page_id FROM crawled_pages WHERE url = 'https://bugemauniv.ac.ug';
  
  IF page_id IS NOT NULL THEN
    -- Insert contact info
    INSERT INTO university_data (page_id, data_type, data)
    VALUES (
      page_id,
      'contactInfo',
      '{"email":"info@bugemauniv.ac.ug","phone":"+256-312-351400","address":"Bugema University Main Campus, Kampala-Gayaza Road, P.O.Box 6529 Kampala, Uganda","socialMedia":{"facebook":"https://www.facebook.com/bugemauniversity","twitter":"https://twitter.com/bugemauniv","instagram":"https://www.instagram.com/bugemauniversity"}}'::JSONB
    );
    
    -- Insert programs
    INSERT INTO university_data (page_id, data_type, data)
    VALUES (
      page_id,
      'programs',
      '[{"name":"Bachelor of Business Administration","level":"Undergraduate","department":"School of Business","description":"A comprehensive business degree.","duration":"4 years","url":"/academics/business/bba"}]'::JSONB
    );
    
    -- Insert admissions
    INSERT INTO university_data (page_id, data_type, data)
    VALUES (
      page_id,
      'admissions',
      '{"requirements":"High school diploma or equivalent.","deadlines":"August 15 for Fall semester.","applicationProcess":"Apply online at bugemauniv.ac.ug/apply","tuitionFees":"UGX 1,500,000 per semester."}'::JSONB
    );
  END IF;
END $$;

