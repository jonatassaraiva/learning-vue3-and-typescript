import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventListView.vue";
import EventDetails from "@/views/EventDetailsView.vue";
import Todo from "@/views/TodoView.vue";
import About from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
