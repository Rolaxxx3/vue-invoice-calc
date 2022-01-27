import Vue from 'vue'
import Vuex from 'vuex'
import invoice from './modules/invoice'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    invoice,
  },
  strict: debug,
})
