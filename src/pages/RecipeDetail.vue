<script setup lang="ts">
import { useRecipe } from '@/composables/recipes/useRecipe'
import { useRoute } from 'vue-router'

const route = useRoute()
const { data, loading, error } = useRecipe(route.params.id as string)
</script>

<template>
  <div v-if="loading">Laddar recept…</div>
  <div v-else-if="error">Fel: {{ error }}</div>

  <div v-else>
    <h1>{{ data?.name }}</h1>

    <h3>Ingredienser</h3>
    <ul>
      <li v-for="i in data?.ingredients" :key="i">{{ i }}</li>
    </ul>

    <router-link :to="`/recipes/${data?.id}/edit`">Redigera</router-link>
  </div>
</template>

<style scoped></style>
