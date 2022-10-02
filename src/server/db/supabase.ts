import { createClient } from '@supabase/supabase-js'
import { env } from '../../env/server.mjs'

// Create a single supabase client for interacting with your database
const SUPABASE_PROJECT_URL: string  = env.SUPABASE_PROJECT_URL
const SUPABASE_ANNON_PUBLIC_KEY: string = env.SUPABASE_ANNON_PUBLIC_KEY
const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANNON_PUBLIC_KEY)

export { supabase }

