import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import("../views/Blog.vue")
  },
  {
    path: "/blog/:postId",
    name: "blogPost",
    component: () =>
      import("../views/Blog-post.vue")
  },
  {
    path: '/contact-us',
    name: 'Contact us',
    component: () => import('../views/Contact-us.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
