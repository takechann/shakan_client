import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Loading表示
    loading: false,

    // ユーザ情報
    userInformation: {
      userId: '',
      token: ''
    }
  },
  getters: {
    getLoading: state => {
      return state.loading
    }
  },
  mutations: {
    // ローディングの設定
    setLoading (state: any, isLoading: boolean) : void {
      state.loading = isLoading
    },
    // ローディングの有無
    getLoading (state: any) : boolean {
      return state.loading
    }
    // },
    // setUserInformation (state: any, userId: string, token: string) {
    //   state.userInformation.push({
    //     userId: userId,
    //     token: token
    //   })
    // }
  },
  actions: {
  },
  modules: {
  }
})
