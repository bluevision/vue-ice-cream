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
        selected: [],

        settings: {
            multiSelect : false
        }
    },
    flavor: {
        options: [
            {name: 'Strawberry'},
            {name: 'Chocolate'},
            {name: 'Vanilla'}
        ],
        selected: [],

        settings: {
            multiSelect : false
        }
    },
    scoops: {
        options: [
            {name: '1', cost: 1.50},
            {name: '2', cost: 2.00},
            {name: '3', cost: 2.50}
        ],
        selected: [],

        settings: {
            multiSelect : false
        }
    },
    toppings: {
        options: [
            {name: 'Sprinkles', cost: 0.10},
            {name: 'Chocolate Syrup', cost: 0.10},
            {name: 'Gummy Bears', cost: 0.3},
            {name: 'Marshmellows', cost: 0.2}
        ],
        selected: [],
        settings: {
            multiSelect : true
        }
    },
},
  mutations: {
      TOGGLE(state, payload) {
          console.log('Mutation')
          const option = payload.option
          let selected = state[payload.category].selected
          const trueFalse = state[payload.category].settings.multiSelect
          if(selected[option]) {
            delete selected[option]
          } else {
            if (trueFalse) {
                state[payload.category].selected.push(option)
                console.log(selected)
           } else {
             console.log('State is Changed')
             state[payload.category].selected = payload.option
         }
          }
         
        }
  },
  actions: {},
  modules: {}
});
