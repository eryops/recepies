import type { Recipe } from '@/types/Recipe'
import { ref } from 'vue'
import { apiPut } from '../useApi'

export function useUpdateRecipe(id: string) {
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function updateRecipe(recipe: Partial<Recipe>) {
    loading.value = true
    error.value = null

    try {
      await apiPut(`/api/recipes/${id}`, recipe)
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  return { updateRecipe, loading, error }
}
