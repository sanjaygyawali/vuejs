const types = {
  SET_BTN_TO_LIST: 'SET_BTN_TO_LIST',
  SET_BTN_TO_ADD: 'SET_BTN_TO_ADD'
}
const state = {
  btnCount: 1,
  portlet: {
    icon: '',
    title: '',
    context: ''
  },
  btn1: {
    icon: '',
    link: '',
    name: ''
  },
  btn2: {
    icon: '',
    link: '',
    name: ''
  }
}

// get the state form here
const getters = {
  btnCount: state => state.btnCount,
  btn1: state => state.btn1,
  btn2: state => state.btn2
}

// any action performed are captured and the commit will mutate the action
const actions = {
  changeToList ({commit}, payload) {
    commit(types.SET_BTN_TO_LIST, payload)
  },
  changeToAdd ({commit}, payload) {
    commit(types.SET_BTN_TO_ADD, payload)
  }
}

// Changes to state are always made by mutators
const mutations = {
  [types.SET_BTN_TO_ADD] (state, payload) {
    state.btn1.icon = 'icon-plus'
    state.btn1.name = 'ADD'
    state.btn1.link = payload.link
    state.portlet.context = 'list'
    state.portlet.title = payload.pageTitle
    state.portlet.icon = 'icon-list'
  },
  [types.SET_BTN_TO_LIST] (state, payload) {
    state.btn1.icon = 'icon-list'
    state.btn1.name = 'LIST'
    state.btn1.link = payload.link
    state.portlet.context = 'add'
    state.portlet.title = payload.pageTitle
    state.portlet.icon = 'icon-plus'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
