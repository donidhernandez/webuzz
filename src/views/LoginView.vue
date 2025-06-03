<script setup>
import Auth from '@/layouts/Auth.vue'
import { supabase } from '@/lib/supabase.js'
import { useRouter } from 'vue-router'

const router = useRouter()

async function loginWithGithub(event) {
  event.preventDefault()

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  })

  if(error) {
    console.error(error)
  }

  return router.push('/home')
}

</script>

<template>
  <Auth>
    <div
      class="max-w-xl w-full flex flex-col justify-center items-start h-[250px] bg-transparent rounded-xl border shadow-gray-200 border-white shadow-xl p-8 space-y-8"
    >
      <h1 class="text-5xl font-bold mb-6 text-center relative text-white" data-content="Login">
        Login
      </h1>
      <form @submit="loginWithGithub" class="w-full flex flex-col justify-center items-start">
        <button
          type="submit"
          class="bg-slate-800 text-white font-semibold text-lg flex items-center gap-2 rounded border py-2 px-4 cursor-pointer hover:bg-transparent hover:scale-105 hover:shadow-md hover:shadow-white ease-in duration-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <v-icon name="bi-github" scale="1.5" /> Continuar con Github
        </button>
      </form>
    </div>
  </Auth>
</template>
