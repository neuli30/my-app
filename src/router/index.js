import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
    { path: '/', name: 'Home', component: HomeView},
    { path: '/about', name: 'About', component: () => import('@/views/AboutView.vue')},
    { path: '/recipe', name: 'Recipe', component: () => import('@/views/RecipeView.vue')},
    { path: '/tour', name: 'Tour', component: () => import('@/views/TourView.vue')},
    { path: '/board', name: 'Board', component: () => import('@/views/BoardView.vue')},
    { path: '/login', name: 'Login', component: () => import('@/views/LoginView.vue')},
    { path: '/:catchAll(.*)', name: 'NotFound', component: () => import('@/views/NotFoundView.vue')},
]

const router = createRouter({
    history: createWebHistory(), // 주소줄에 # 없이 라우팅
    routes
})

export default router
