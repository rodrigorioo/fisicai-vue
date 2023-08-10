import Vue from 'vue'
import VueRouter from 'vue-router'
import SolveProblemView from "@/views/SolveProblemView.vue";
import RegisterView from "@/views/RegisterView.vue";
import {authMixin} from "@/mixins/auth.mixin";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: SolveProblemView,
    },
    {
        path: '/login',
        name: 'login',
        component: RegisterView
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'login') {

        if(!authMixin.methods._auth_check()) {
            next({ name: 'login' })
        }

    }

    next()
})

export default router;
