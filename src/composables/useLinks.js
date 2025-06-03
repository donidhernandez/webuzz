import { ref } from 'vue'
import { supabase } from '@/lib/supabase.js'

export default function useLinks(username) {
  const links = ref([])
  const loading = ref(false)

  const fetchLinks = async () => {
    loading.value = true
    const { data, error } = await supabase
      .from('links')
      .select('id,title,url')
      .eq('username', username)
      .order('position', { ascending: true })

    if (error) {
      console.error('Error fetching links', error)
    } else {
      links.value = data || []
    }

    loading.value = false
  }

  fetchLinks()

  return { links, loading }
}
