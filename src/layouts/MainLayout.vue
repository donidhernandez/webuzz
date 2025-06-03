<template>
  <header class="flex px-12 justify-between w-full h-14 items-center sticky top-0 bg-gray-100">
      <p class="font-light text-2xl">We<span class="font-black text-blue-600">Buzz</span></p>
      <nav class="flex space-x-3 items-center">
        <RouterLink class="text-lg font-semibold hover:text-blue-600 transition-all ease-in duration-300" to="/">Inicio</RouterLink>
        <button class="bg-slate-800 py-2 px-4 cursor-pointer hover:border-slate-800 hover:border hover:text-slate-800 hover:bg-transparent transition-colors ease-in duration-200 text-white">Cerrar sesión</button>
      </nav>
  </header>

  <main class="min-h-dvh w-full bg-slate-800  flex flex-col justify-center items-center">
    <slot />
  </main>

</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
