import mutations from './mutations'
import defaultState from './defaultState'

export default {
  namespaced: true,
  mutations,
  state: defaultState(),
}
