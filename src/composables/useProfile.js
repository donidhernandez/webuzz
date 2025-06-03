import { supabase } from '@/lib/supabase.js'

export default function useProfile(userId) {
  const { data, error } = supabase.from('profiles').select('*').eq('id', userId).single()

  if (error) {
    console.error(error)
  }

  return {
    data
  }
}
