import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        container: {
            options: [
                { name: 'Cup', cost: 0.25 },
                { name: 'Cake Cone', cost: 0.5 },
                { name: 'Waffle Cone', cost: 1.0 },
            ],
            selected: [],

            settings: {
                multiSelect: false,
            },
        },
        flavor: {
            options: [
                { name: 'Strawberry' },
                { name: 'Chocolate' },
                { name: 'Vanilla' },
            ],
            selected: [],

            settings: {
                multiSelect: false,
            },
        },
        scoops: {
            options: [
                { name: '1', cost: 1.5 },
                { name: '2', cost: 2.0 },
                { name: '3', cost: 2.5 },
            ],
            selected: [],

            settings: {
                multiSelect: false,
            },
        },
        toppings: {
            options: [
                { name: 'Sprinkles', cost: 0.1 },
                { name: 'Chocolate Syrup', cost: 0.1 },
                { name: 'Gummy Bears', cost: 0.3 },
                { name: 'Marshmellows', cost: 0.2 },
            ],
            selected: [],
            settings: {
                multiSelect: true,
            },
        },
    },
    mutations: {
        TOGGLE(state, payload) {
            var category = state[payload.category]
            var selected = category.selected
            if (category.settings.multiSelect) {
                var result = selected.filter(obj => {
                    return obj.name === payload.option.name
                })
                if (result.length != 0) {
                    category.selected = selected.filter(
                        obj => obj.name !== payload.option.name,
                    )
                } else {
                    selected.push(payload.option)
                }
            } else {
                selected = []
                selected.push(payload.option)
            }
        },
    },
    actions: {},
    modules: {},
})
