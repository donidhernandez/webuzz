<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="flex flex-col items-center justify-center space-y-10">
    <h1 class="text-white text-7xl font-black">Upss.. parece que te haz perdido</h1>
    <RouterLink class="py-3 px-10 bg-white font-semibold text-lg hover:bg-transparent border border-white hover:text-white transition-colors ease-in duration-300" to="/">Volver al inicio</RouterLink>
  </section>
</template>
