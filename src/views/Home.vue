<template>
  <div class="container-fluid row bg-warning">
    <div class="col-sm-5 col-md-4 col-lg-3">
      <LeftBar>
        <tbody>
          <th>
            Bienvenido al sistema de ensayo teorico de la prueba de conducir
            licencias tipo B
          </th>
          <tr>
            <td>
              en esta aplicacion podrás evaluar y mejorar tus conocimientos con
              respecto a como funciona la ley de transito
            </td>
          </tr>
        </tbody>
      </LeftBar>
    </div>
    <div class="col-sm">
      <h1 class="titulo">Titulo de prueba</h1>
      <Card
        v-if="!user.loggedIn"
        :titulo="'Bienvenido al sistema!'"
        :links="[
          { texto: 'Registrarse', to: '/register' },
          { texto: 'Iniciar sesion', to: '/login' }
        ]"
        >en este mismo podras desarrollarte como chofer. Para ello tienes que
        iniciar sesion o registrarte</Card
      >
      <Card
        v-else
        :titulo="`Bienvenido ${user.data.nombre}`"
        :links="[
          { texto: 'Iniciar cuestionario', to: '/prueba' },
          { texto: 'Cerrar sesion', to: '/signOut' }
        ]"
        >aqui podras iniciar una prueba de conducir</Card
      >
    </div>
    <div class="col-sm-4 col-md-3">
      <RightBar>
        <div class="texto">
          <h3>Nuestra mision</h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab
          numquam harum, fuga ratione eligendi laudantium repellendus, ad
          distinctio dolor, maxime laborum iure. Molestias quas, in ex
          aspernatur esse blanditiis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate ab numquam harum, fuga ratione eligendi
          laudantium repellendus, ad distinctio dolor, maxime laborum iure.
          Molestias quas, in ex aspernatur esse blanditiis.
        </div>
        <RightLogo
          class="w-25"
          style="position: absolute; bottom: 0; right: 0;"
        />
      </RightBar>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import RightBar from "../components/RightBar.vue";
import LeftBar from "../components/LeftBar.vue";
import RightLogo from "../components/RightLogo";
import { mapGetters } from "vuex";

export default {
  components: {
    LeftBar,
    RightBar,
    RightLogo,
    Card
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
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
