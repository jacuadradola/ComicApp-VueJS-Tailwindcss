import { createRouter, createWebHistory } from "vue-router";

/*  Import views */
import Home from "../views/Home.vue";
import Characters from "@/views/Characters.vue";
import Locations from "@/views/Locations.vue";
import Episodes from "@/views/Episodes.vue";
import CharacterDetails from "@/views/CharacterDetails";

/* Import Components */

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/character",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/character/:id",
    name: "CharacterDetails",
    component: CharacterDetails,
    props: true
  },
  {
    path: "/location",
    name: "Locations",
    component: Locations,
  },
  {
    path: "/episode",
    name: "Episodes",
    component: Episodes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
