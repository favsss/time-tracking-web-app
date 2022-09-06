import Vue from 'vue';
import VueRouter from 'vue-router';
import Checkins from './../views/Checkins';
import Charts from './../views/Charts';
import Login from './../views/Login';

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
        component: Checkins
    },
    {
        path: '/charts',
        name: 'charts',
        component: Charts
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;