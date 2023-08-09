import Vue from 'vue'
import VueRouter from 'vue-router'
import SolveProblemView from "@/views/SolveProblemView.vue";
import RegisterView from "@/views/RegisterView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: SolveProblemView
  },
  {
    path: '/login',
    name: 'login',
    component: RegisterView
  },
]

const router = new VueRouter({
  routes
})

export default router
