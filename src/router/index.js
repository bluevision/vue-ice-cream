import Vue from "vue";
import Router from "vue-router";
import Container from "../views/Container.vue";
import Flavor from "../views/Flavor.vue";
import Scoops from "../views/Scoops.vue"
import Toppings from "../views/Toppings.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
  {
    path: "/",
    name: "container",
    component: Container,
    props: true
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
]

});




