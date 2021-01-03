<template>
  <div class="container-fluid row bg-warning">
    <div class="col-sm-5 col-md-4 col-lg-3">
      <LeftBar />
    </div>
    <div class="col-sm">
      <h1 class="titulo">Titulo de prueba</h1>
      <Card
        :titulo="'Bienvenido al sistema!'"
        :links="[
          { texto: 'Registrarse', to: '/register' },
          { texto: 'Iniciar sesion', to: '/login' }
        ]"
        >en este mismo podras desarrollarte como chofer. Para ello tienes que
        iniciar sesion o registrarte</Card
      >
    </div>
    <div class="col-sm-4 col-md-3">
      <RightBar />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import RightBar from "./Home/RightBar.vue";
import LeftBar from "./Home/LeftBar.vue";
export default {
  components: {
    LeftBar,
    RightBar,
    Card
  }
};
</script>
<style scoped>
.titulo {
  text-align: center;
  margin: 20px 0;
}
.row > * {
  margin: 0;
  padding: 0;
}
.card {
  margin: 15px;
}
</style>
