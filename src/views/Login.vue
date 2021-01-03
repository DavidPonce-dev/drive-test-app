<template>
  <div class="container-fluid bg-warning row h-100">
    <div class="col-sm-8 col-md-6 mx-auto my-auto">
      <Card :titulo="'Iniciar sesion'">
        <form @submit.prevent="submit">
          <div class="mb-3">
            <label class="form-label">Correo electronico </label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="correo"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Contraseña </label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <button type="submit" class="btn btn-success d-block ms-auto">
            Submit
          </button>
        </form>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  data() {
    return {
      correo: "",
      password: ""
    };
  },
  components: {
    Card
  },
  methods: {
    submit() {
      console.log(this.$data);
    }
  }
};
</script>

<style scoped>
.container-fluid {
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
