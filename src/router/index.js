import Vue from 'vue'
import Router from 'vue-router'
const login = () => import("../view/login/login.vue")
const register = () => import("../view/register/register.vue")
const index = () => import("../view/index/index.vue")
const theVideo = () => import("../view/theVideo/theVideo.vue")

Vue.use(Router)


const routes =  [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },{
    path: '/theVideo',
    name: 'theVideo',
    component: theVideo
  }
]

const router = new Router({
  routes,
  mode: "history",
})

export default router;


router.beforeEach((to, from, next) => {
  if(to.path == "/login" || router.app.$store.state.User != "" || to.path == "/register"){
    console.log("ok");
    next();
  }
  else{
    alert("请先进行登录");
    next("/login");
  }
});
