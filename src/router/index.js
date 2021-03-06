import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cameras",
    name: "Cameras",
    component: () =>
      import(/* webpackChunkName: "cameras" */ "../views/Cameras.vue"),
  },
  {
    path: "/stations",
    name: "Stations",
    component: () =>
      import(/* webpackChunkName: "stations" */ "../views/Stations.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "settngs" */ "../views/Settings.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
