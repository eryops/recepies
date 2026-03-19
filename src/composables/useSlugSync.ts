import { slugify } from '@/utils/slugify'
import { watch, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function useSlugSync(nameSource: Ref<string | undefined>) {
  const route = useRoute()
  const router = useRouter()

  watch(
    nameSource,
    (value) => {
      if (!value) return

      const correctSlug = slugify(value)
      const currentSlug = route.params.slug

      if (currentSlug !== correctSlug) {
        router.replace({
          name: route.name as string,
          params: {
            ...route.params,
            slug: correctSlug,
          },
        })
      }
    },
    { immediate: true },
  )
}
