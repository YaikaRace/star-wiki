import { createRouter, createWebHistory } from "vue-router";
import PeopleView from "../views/PeopleView.vue";
import PersonView from "../views/PersonView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/people",
  },
  {
    path: "/people",
    name: "people",
    component: PeopleView,
  },
  {
    path: "/people/:id",
    name: "person",
    component: PersonView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
