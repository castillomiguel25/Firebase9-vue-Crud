import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Registerr from "../views/Registerr";
import Edit from "../views/Edit";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Registerr",
    name: "Registerr",
    component: Registerr,
  },
  {
    path: "/cities/:cityId",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/about",
    name: "About",
  
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;