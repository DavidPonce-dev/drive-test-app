import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Cuestionario from "../views/Cuestionario.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
