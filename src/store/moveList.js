import moveList from '@/data/moveList'

export default {
  namespaced: true,
  state: {
    move: {
      unique: [],
      specials: [],
    }
  },
  mutations: {
    set(state, move) {
      state.move = move
    },
  },
  actions: {
    get(store, char) {
      const { commit } = store
      commit('set', moveList[char])
    },
  },
}
