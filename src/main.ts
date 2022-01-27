import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'vue-good-table/dist/vue-good-table.css'

import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

// @ts-ignore
Object.keys(rules).forEach((rule) => extend(rule, rules[rule]))

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, { ...validation })
}

Vue.config.productionTip = false

new Vue({
  name: 'VueInvoiceCalc',
  store,
  router,
  render: h => h(App),
}).$mount('#app')
