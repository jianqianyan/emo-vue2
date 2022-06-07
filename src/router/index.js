import Vue from 'vue'
import Router from 'vue-router'
const login = () => import("../view/login/login.vue")
const register = () => import("../view/register/register.vue")
const index = () => import("../view/index/index.vue")
const theVideo = () => import("../view/theVideo/theVideo.vue")

// Resolve duplicate routing
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

Vue.use(Router)


const routes = [{
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
  }, {
    path: '/theVideo',
    name: 'theVideo',
    component: theVideo
  }, {
    path: "/contribution",
    name: 'contribution',
    component: () => import("../view/contribution/contribution.vue")
  },{
    path: "/center",
    name: "center",
    component: () => import("../view/center/center.vue")
  }
]

const router = new Router({
  routes,
  mode: "history",
})

export default router;


router.beforeEach((to, from, next) => {
  if (to.path == "/login" || router.app.$store.state.user_name != "" || to.path == "/register") {
    next();
  } else {
    alert("请先进行登录");
    next("/login");
  }
});
