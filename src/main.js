import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ProductSelection from '@/components/ProductSelection.vue'
import ButtonInput from '@/components/Button.vue'

Vue.component('ProductSelection', ProductSelection)
Vue.component('Button', ButtonInput)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
