import Vue from 'vue'
import Vuex from 'vuex'
import invoice from './modules/invoice'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    invoice,
  },
  plugins: [createPersistedState()],
  strict: debug,
})
