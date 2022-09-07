import Vue from 'vue';
import VueRouter from 'vue-router';
import Checkins from './../views/Checkins';
import Charts from './../views/Charts';
import Login from './../views/Login';
import store from './../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/checkins',
        name: 'checkins',
        component: Checkins,
        meta: { requiresAuth: true }
    },
    {
        path: '/charts',
        name: 'charts',
        component: Charts,
        meta: { requiresAuth: true }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.getters["auth/IsAuthenticated"]) {
            next({ name: 'login'});
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;