

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <main class="min-h-dvh w-full bg-slate-800 flex flex-col justify-center items-center">
    <slot />
  </main>

</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
