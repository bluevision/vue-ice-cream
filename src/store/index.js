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
        selected: [{name: 'Marshmellows', cost: 0.2}],
        settings: {
            multiSelect : true
        }
    },
},
  mutations: {
      TOGGLE(state, payload) {
          let selection = state[payload.category].selected
          const trueFalse = state[payload.category].settings.multiSelect
          if(selection[payload.option]) {
            console.log('deleted')
            delete state[payload.category].selected.payload.option
          } else {
            if (trueFalse) {

                state[payload.category].selected.push(payload.option)
                console.log('multi select')
                console.log(payload.option)
                console.log(state[payload.category].selected)
           } else {
             console.log(payload.option)
             state[payload.category].selected.push(payload.option)
         }
          }
         
        }
  },
  actions: {},
  modules: {}
});
