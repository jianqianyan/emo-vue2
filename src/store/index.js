import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    User: "qianyan",
    user_id:"1",
    user_name: "qianyan",
    user_path: "http://localhost:3000/user_photo/1.jpg",
    video_base: "http://localhost:3000/video",
    image_base: "http://localhost:3000/image/",
    photo_base: "http://localhost:3000/user_photo",
    ver_base: "http://localhost:3000/img_code",
    video_message: [],
  },
  mutations,
  actions,
  getters,
  modules: {}
});

export default store;
