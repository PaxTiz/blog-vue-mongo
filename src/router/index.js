import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const checkAuth = async (to, from, next) => {
    if(['Login', 'Register', 'Home'].includes(to.name))
        next()
    else if(!store.state.isAuth || store.state.user === {})
        await router.push('/login')
    else
        next()
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue')
    },
    {
        path: '*',
        name: '404',
        component: () => import('../views/404.vue')
    }
]

const router = new VueRouter({
    routes
})
router.beforeEach(checkAuth)

export default router
