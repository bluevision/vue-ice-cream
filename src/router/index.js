import Vue from "vue";
import Router from "vue-router";
import Options from "../views/Options.vue";
import store from "../store";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
  {
    path: "/",
    name: "container",
    component: Options,
    props: ()=> {
      return {
        options: store.state.container.options,
        title: 'Select a Container', 
        selected: store.state.container.selected
      }
    }
  },
  {
    path: "/flavor",
    name: "flavor",
    component: Options,
    props: ()=> {
      return {
        options: store.state.flavor.options,
        title: 'Select a Flavor', 
        selected: store.state.flavor.selected
      }
    }
  },
  {
    path: "/scoops",
    name: "scoops",
    component: Options,
    props: ()=> {
      return {
        options: store.state.scoops.options,
        title: 'Select a Scoops', 
        selected: store.state.scoops.selected
      }
    }
  },
  {
    path: "/toppings",
    name: "toppings",
    component: Options,
    props: ()=> {
      console.log("something")
      return {
        options: store.state.toppings.options,
        title: 'Select your Toppings', 
        selected: store.state.toppings.selected
      }
    }
  }
]

});




