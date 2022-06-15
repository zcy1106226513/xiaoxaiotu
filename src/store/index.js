import Vue from 'vue';
import Vuex from 'vuex';
import { getNav } from '@/api/Nav.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    navStoreList: [],
  },
  getters: {
  },
  mutations: {
    login(state, user) {
      state.userInfo = user;
    },
    GETNAV(state, data) {
      state.navStoreList = data;
    },
  },
  actions: {
    async getNav({ commit }) {
      const { result } = await getNav();
      console.log(result);
      commit('GETNAV', result);
    },

  },
  modules: {
  },
});
