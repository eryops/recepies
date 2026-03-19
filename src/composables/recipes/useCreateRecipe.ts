import type { Recipe } from '@/types/Recipe'
import { apiPost } from '../useApi'
import { ref } from 'vue'

export function useCreateRecipe() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function createRecipe(recipe: Recipe) {
    loading.value = true
    error.value = null

    try {
      await apiPost('/api/recipes', recipe)
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  return { createRecipe, loading, error }
}
