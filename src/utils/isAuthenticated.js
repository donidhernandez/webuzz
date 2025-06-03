import { supabase } from '@/lib/supabase.js'

export default async function isAuthenticated() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()

    if (error) {
      console.error('Auth check error:', error)
      return false
    }

    return !!session?.user
  } catch (error) {
    console.error('Authentication check failed:', error)
    return false
  }
}
