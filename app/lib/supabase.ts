import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Supabase URL and Anon Key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zuqwohycmkynlknobwuv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseAnonKey) {
  console.warn('⚠️ VITE_SUPABASE_ANON_KEY is not set. Please add it to your .env file.');
}

// Create Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Portfolio website doesn't need auth persistence
  },
});

// Helper function to handle Supabase errors
export function handleSupabaseError(error: any, context: string = 'Supabase operation') {
  console.error(`${context}:`, error);
  return {
    success: false,
    error: error.message || 'An unknown error occurred',
  };
}

// Helper function for successful responses
export function handleSupabaseSuccess<T>(data: T) {
  return {
    success: true,
    data,
  };
}
