import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Production from "../views/Production.vue";
import About from "../views/About.vue";
import Cooperation from "../views/Cooperation.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", redirect: "/production" },
  {
    path: "/production",
    name: "Production",
    component: Production,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/cooperation",
    name: "Cooperation",
    component: Cooperation,
  },
];
const router = new VueRouter({
  routes,
});

export default router;
