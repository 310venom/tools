import specialsData from '@/data/specials'

export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    set(state, specials) {
      state.data = specials
    },
  },
  actions: {
    get(store, char) {
      const { commit } = store
      commit('set', specialsData[char])
    },
  },
}
