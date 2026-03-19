import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/recipes' },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('@/pages/RecipeList.vue'),
      meta: { title: 'Receptlista' },
    },
    {
      path: '/recipes/:id',
      name: 'recipe-detail',
      component: () => import('@/pages/RecipeDetail.vue'),
      meta: { title: 'Recept' },
    },
    {
      path: '/recipes/new',
      name: 'recipe-create',
      component: () => import('@/pages/RecipeCreate.vue'),
      meta: { title: 'Nytt recept' },
    },
    {
      path: '/recipes/:id/edit',
      name: 'recipe-edit',
      component: () => import('@/pages/RecipeEdit.vue'),
      meta: { title: 'Redigera recept' },
    },
  ],
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'Recept'
})
