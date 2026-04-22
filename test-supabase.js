// Quick test script to verify Supabase connection
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zuqwohycmkynlknobwuv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1cXdvaHljbWt5bmxrbm9id3V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NDU5MDIsImV4cCI6MjA5MjQyMTkwMn0.o2dZnCPWoWhlruEiHuECGsVmWlea_C4B1-d3xF5P6HU';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('🔍 Testing Supabase connection...\n');

  try {
    // Test 1: Check connection
    console.log('✅ Supabase client initialized');
    console.log('   URL:', supabaseUrl);
    
    // Test 2: Try to query (will fail if migrations not run yet)
    const { data, error } = await supabase
      .from('projects')
      .select('count')
      .single();

    if (error) {
      if (error.message.includes('relation') || error.message.includes('does not exist')) {
        console.log('\n⚠️  Connection OK, but tables not created yet');
        console.log('   Next step: Run migrations in Supabase SQL Editor');
        console.log('   Files: supabase/migrations/001_initial_schema.sql');
        console.log('         supabase/migrations/002_seed_data.sql');
      } else {
        console.log('\n❌ Error:', error.message);
      }
    } else {
      console.log('\n✅ Connection successful!');
      console.log('   Tables exist and are accessible');
    }
  } catch (err) {
    console.error('\n❌ Connection failed:', err.message);
  }
}

testConnection();
