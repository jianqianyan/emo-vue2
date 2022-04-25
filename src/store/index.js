import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    User: "",
  },
  mutations,
  actions,
  getters,
  modules: {}
});

export default store;
