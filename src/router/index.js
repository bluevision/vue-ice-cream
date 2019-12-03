import Vue from "vue";
import VueRouter from "vue-router";
import Container from "../views/Container.vue";
import Flavor from "../views/Flavor.vue";
import Scoops from "../views/Scoops.vue"
import Toppings from "../views/Toppings.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "container",
    component: Container
  },
  {
    path: "/flavor",
    name: "flavor",
    component: Flavor
  },
  {
    path: "/scoops",
    name: "scoops",
    component: Scoops
  },
  {
    path: "/toppings",
    name: "toppings",
    component: Toppings
  }
];

const router = new VueRouter({
  routes
});

export default router;
