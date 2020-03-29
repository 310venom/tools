import Vue from 'vue'
import Vuex from 'vuex'
import moveList from './moveList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moveList,
  },
})
