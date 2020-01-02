import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    container: {
        options: [
            {name: 'Cup', cost: 0.25},
            {name: 'Cake Cone', cost: 0.5},
            {name: 'Waffle Cone', cost: 1.00}
        ],
        selected: {name: 'Cup', cost: 0.25}
    },
    flavor: {
        options: [
            {name: 'Strawberry'},
            {name: 'Chocolate'},
            {name: 'Vanilla'}
        ],
        selected: undefined
    },
    scoops: {
        options: [
            {number: 1, cost: 1.50},
            {number: 2, cost: 2.00},
            {number: 3, cost: 2.50}
        ],
        selected: undefined
    },
    toppings: {
        options: [
            {name: 'Sprinkles', cost: 0.10},
            {name: 'Chocolate Syrup', cost: 0.10},
            {name: 'Gummy Bears', cost: 0.3},
            {name: 'Marshmellows', cost: 0.2}
        ],
        selected: undefined
    },
},
  mutations: {},
  actions: {},
  modules: {}
});
