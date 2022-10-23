import { createRouter, createWebHistory } from "vue-router";
import PeopleView from "../views/PeopleView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PeopleView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
