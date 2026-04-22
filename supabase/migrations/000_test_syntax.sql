-- QUICK SQL SYNTAX TEST
-- This is a minimal test to verify SQL escaping is correct
-- Run this in Supabase SQL Editor to test before running full migrations

-- Test 1: Simple apostrophe escape
SELECT 'Let''s test' AS test1;

-- Test 2: Multiple apostrophes
SELECT 'Hello, I''m testing. Let''s see if it works.' AS test2;

-- Test 3: Vietnamese text with apostrophes (if any)
SELECT 'Hãy thảo luận' AS test3;

-- If all 3 queries run successfully, your SQL syntax is correct!
-- You can now proceed to run:
-- 1. supabase/migrations/001_initial_schema.sql
-- 2. supabase/migrations/002_seed_data.sql
