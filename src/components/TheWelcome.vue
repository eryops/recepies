<script setup lang="ts">
import { onMounted, ref } from 'vue'

const message = ref('Using Composition API with TypeScript')

onMounted(async () => {
  const response = await fetch('/api/hello')
  const data = await response.json()
  message.value = data.message
})
</script>

<template>
  <div class="welcome">
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.welcome {
  padding: 2rem;
  text-align: center;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
