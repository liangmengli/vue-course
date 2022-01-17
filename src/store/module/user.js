import { getUserName } from '@/api/app'

const state = {
  userName: 'user admin'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME: (state, params) => {
    state.userName = params
  }
}
const actions = {
  updateUserName ({ commit }) {
    getUserName().then((data) => {
      commit('SET_USER_NAME', data.info)
    }).catch((error) => {
      console.log(1, error)
    })
  }
}

export default {
  // namespaced: true,
  getters,
  state,
  mutations,
  actions
}
