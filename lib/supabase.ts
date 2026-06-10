import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

// Replace these string placeholders with your actual keys from the Supabase Dashboard
// You can find them under: Project Settings -> API
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});