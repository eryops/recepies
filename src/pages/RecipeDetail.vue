<script setup lang="ts">
import { useRecipe } from '@/composables/recipes/useRecipe'
import { usePageTitle } from '@/composables/usePageTitle'
import { useSlugSync } from '@/composables/useSlugSync'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { data: recipe, loading, error } = useRecipe(route.params.id as string)

const recipeName = computed(() => recipe.value?.name)

usePageTitle(recipeName)
useSlugSync(recipeName)
</script>

<template>
  <div v-if="loading">Laddar recept…</div>
  <div v-else-if="error">Fel: {{ error }}</div>

  <div v-else>
    <h1>{{ recipe?.name }}</h1>

    <h3>Ingredienser</h3>
    <ul>
      <li v-for="i in recipe?.ingredients" :key="i">{{ i }}</li>
    </ul>

    <router-link :to="`/recipes/${recipe?.id}/edit`">Redigera</router-link>
  </div>
</template>

<style scoped></style>
