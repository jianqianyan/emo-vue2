import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    User: "",
    user_id:"",
    user_name: "",
    user_information:"",
    base_url: "http://81.68.212.237:3000",
    user_base: "http://81.68.212.237:3000/user_photo",
    user_path: "http://81.68.212.237:3000/user_photo/1.jpg",
    video_base: "http://81.68.212.237:3000/video",
    image_base: "http://81.68.212.237:3000/image/",
    photo_base: "http://81.68.212.237:3000/user_photo",
    ver_base: "http://localhost:3000/img_code",
    video_message: [],
  },
  mutations,
  actions,
  getters,
  modules: {}
});

export default store;
