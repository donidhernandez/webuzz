<script setup>
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import LinkList from '@/components/LinkList.vue'
import useLinks from '@/composables/useLinks.js'

const route = useRoute()
const username = route.params.username
const { links, loading } = useLinks(username)
</script>

<template>
  <MainLayout>
    <div class="flex flex-col justify-center items-center space-y-6 py-10">
      <h1 class="text-4xl text-white font-bold">{{ username }}</h1>
      <LinkList :links="links" v-if="!loading" />
      <p v-else class="text-white">Cargando...</p>
    </div>
  </MainLayout>
</template>
