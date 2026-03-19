import type { Ref } from 'vue'

export interface ApiResults<T> {
  readonly data: Ref<T>
  readonly loading: Ref<boolean>
  readonly error: Ref<string | null>
}
