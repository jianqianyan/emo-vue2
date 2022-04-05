import Vue from 'vue'
import Router from 'vue-router'
const login = () => import("../view/login/login.vue")

Vue.use(Router)


const routes =  [
  {
    path: '/',
    name: 'login',
    component: login
  }
]

const router = new Router({
  routes,
  mode: "history",
})

export default router;


router.beforeEach((to, from, next) => {
  next();
});
