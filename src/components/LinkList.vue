<script setup>
const props = defineProps({
  links: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <ul class="w-full max-w-md flex flex-col space-y-3">
    <li v-for="link in props.links" :key="link.id">
      <a
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="block py-3 px-4 rounded bg-white text-center font-medium hover:bg-blue-600 hover:text-white transition-colors"
      >
        {{ link.title }}
      </a>
    </li>
  </ul>
</template>
