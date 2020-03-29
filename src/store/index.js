import Vue from 'vue'
import Vuex from 'vuex'
import specials from './specials'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    specials,
  },
})
