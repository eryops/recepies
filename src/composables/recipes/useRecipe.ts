import { ref, onMounted } from 'vue'
import { apiGet } from '../useApi'
import type { Recipe } from '@/types/Recipe'
import type { ApiResults } from '@/types/ApiResults'

export function useRecipe(id: string): ApiResults<Recipe | null> {
  const data = ref<Recipe | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      data.value = await apiGet<Recipe>(`/api/recipes/${id}`)
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  })

  return { data, loading, error }
}
