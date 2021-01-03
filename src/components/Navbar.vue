<template>
  <nav class="nav bg-dark">
    <div class="me-auto">
      <router-link class="nav-link" to="/">Inicio</router-link>
    </div>
    <div class="ms-auto">
      <router-link class="nav-link bg-danger" to="/close">X</router-link>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  color: #fff;
}
.nav-link.bg-danger:hover {
  opacity: 1;
}
.nav-link.bg-danger {
  opacity: 0.7;
}
.router-link-exact-active {
  color: rgb(202, 138, 0);
}
.nav > div > a {
  float: left;
}
</style>
