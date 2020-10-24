export const state = () => ({
  loadDone: false,
})

export const mutations = {
  setLoadDone(state, payload) {
    state.loadDone = payload;
  }
}

export const actions = {
  setLoadDone({commit}, payload) {
    commit('setLoadDone', payload);
  }
}

export const getters = {
  loadDone(state) {
    return state.loadDone;
  }
}
