import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Cuestionario from "../views/Cuestionario.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import SignOut from "../views/SignOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/prueba",
    name: "Prueba",
    component: Cuestionario
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/signOut",
    name: "SignOut",
    component: SignOut
  }
];

const router = new VueRouter({
  routes
});

export default router;
