<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style>
body {
  overflow: hidden;
}
.d-block {
  display: block;
}
.container-fluid {
  min-height: calc(100vh - 40px);
  padding: 0px;
  margin: 0px;
}
</style>
