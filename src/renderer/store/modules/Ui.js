const state = {
  drawerOpen: true,
  currentLocation: 'Recent',
  signedIn: true
}

const getters = {
  isDrawerOpen: state => state.drawerOpen,
  getCurrentLocation: state => state.currentLocation,
  isSignedIn: state => state.signedIn
}

const mutations = {
  TOGGLE_DRAWER_STATUS (state) {
    state.drawerOpen = !state.drawerOpen
  },
  SET_DRAWER_STATUS (state, value) {
    state.drawerOpen = value
  },
  SET_CURRENT_LOCATION (state, value) {
    state.currentLocation = value
  }
}

const actions = {
  toggleDrawerStatus ({ commit }) {
    commit('TOGGLE_DRAWER_STATUS')
  },
  setDrawerStatus ({ commit }, value) {
    commit('SET_DRAWER_STATUS', value)
  },
  setCurrentLocation ({ commit }, value) {
    commit('SET_CURRENT_LOCATION', value)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
