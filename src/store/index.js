import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    User: "qianyan",
    video_base: "http://localhost:3000/video",
    image_base: "http://localhost:3000/image",
    photo_base: "http://localhost:3000/user_photo"
  },
  mutations,
  actions,
  getters,
  modules: {}
});

export default store;
