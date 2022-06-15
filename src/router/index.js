import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/views/layout/layout.vue';

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'layout',
    redirect: 'index',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "category" */'@/views/index.vue'),

      },
      {
        path: 'category/:id',
        name: 'category',
        component: () => import(/* webpackChunkName: "category" */'@/views/Category/category.vue'),

      },
    ],

  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'@/views/Login/Login.vue'),
  },

];

const router = new VueRouter({
  routes,
});

export default router;
