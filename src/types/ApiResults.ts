import type { Ref } from 'vue'

export interface ApiResults<T> {
  data: Ref<T>
  loading: Ref<boolean>
  error: Ref<string | null>
}
