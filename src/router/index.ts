import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/recipes' },
    { path: '/recipes', name: 'recipe', component: () => import('@/pages/RecipeList.vue') },
    {
      path: '/recipes/:id',
      name: 'recipe-detail',
      component: () => import('@/pages/RecipeDetail.vue'),
    },
    {
      path: '/recipes/new',
      name: 'recipe-create',
      component: () => import('@/pages/RecipeCreate.vue'),
    },
    {
      path: '/recipes/:id/edit',
      name: 'recipe-edit',
      component: () => import('@/pages/RecipeEdit.vue'),
    },
  ],
})
