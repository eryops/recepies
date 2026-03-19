import { watch, type Ref } from 'vue'

export function usePageTitle(titleSource: Ref<string | undefined>) {
  watch(
    titleSource,
    (value) => {
      if (value) {
        document.title = value
      }
    },
    { immediate: true },
  )
}
