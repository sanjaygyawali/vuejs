const types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR'
}
const state = {
  sidebarOpen: false
}

// get the state form here
const getters = {
  sidebarOpen: state => state.sidebarOpen
}

// any action performed are captured and the commit will mutate the action
const actions = {
  toggleSidebar ({commit, state}) {
    commit(types.TOGGLE_SIDEBAR)
  }
}

// Changes to state are always made by mutators
const mutations = {
  [types.TOGGLE_SIDEBAR] (state) {
    state.sidebarOpen = !state.sidebarOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
