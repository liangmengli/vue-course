import { getAppName } from '@/api/app'

const actions = {
  // updateAppName({commit}) {
  //   console.log(111)
  //   getAppName().then((data) => {
  //     console.log(1, data)
  //     commit("SET_APP_NAME", data.info)
  //   }).catch((error) => {
  //     console.log(1, error)
  //   })
  // }
  async updateAppName ({ commit }) {
    try {
      const { info } = await getAppName()
      commit('SET_APP_NAME', info)
    } catch (err) {
      console.log(err)
    }
  }
}

export default actions
