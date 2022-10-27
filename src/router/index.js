import { createRouter, createWebHistory } from "vue-router";
import PeopleView from "../views/PeopleView.vue";

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
    children: [
      {
        path: ":id",
        name: "peoples",
        component: PeopleView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
