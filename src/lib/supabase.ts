import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our contact form
export interface ContactFormData {
  full_name: string
  email: string
  phone: string
  business_name: string
  package_interest: string
  project_description: string
  how_did_you_hear: string
  created_at?: string
}

export interface ContactSubmission {
  id?: number
  full_name: string
  email: string
  phone: string
  business_name: string
  package_interest: string
  project_description: string
  how_did_you_hear: string
  created_at: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
}
