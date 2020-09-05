export default {
  namespaced: true,
  state: {
    officialJoke: {},
    bored: {},
    corporateBullshit: {},
  },
  getters: {
    officialJoke: (state) => state.officialJoke,
    bored: (state) => state.bored,
    corporateBullshit: (state) => state.corporateBullshit,
  },
  mutations: {
    setOfficialJoke: (state, payload) => state.officialJoke = payload,
    setBored: (state, payload) => state.bored = payload,
    setCorporateBullshit: (state, payload) => state.corporateBullshit = payload,
  },
  actions: {
    setResult: ({ commit }, payload) => {
      if ('setup' in payload) {
        commit('setOfficialJoke', payload)
      } else if ('activity' in payload) {
        commit('setBored', payload)
      } else if ('phrase' in payload) {
        commit('setCorporateBullshit', payload)
      }
    }
  }

}