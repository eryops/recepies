<script setup lang="ts">
import { useRecipes } from '@/composables/recipes/useRecipes'

const { data, loading, error } = useRecipes()
</script>

<template>
  <h1>Recept</h1>

  <div v-if="loading">Laddar recept…</div>
  <div v-else-if="error">Fel: {{ error }}</div>

  <ul v-else>
    <li v-for="recipe in data" :key="recipe.id">
      <router-link :to="`/recipes/${recipe.id}`">
        {{ recipe.name }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped></style>
