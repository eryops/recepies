import { ref } from 'vue'
import { apiDelete } from '../useApi'

export function useDeleteRecipe() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function deleteRecipe(id: number) {
    loading.value = true
    error.value = null

    try {
      await apiDelete(`/api/recipes/${id}`)
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  return { deleteRecipe, loading, error }
}
