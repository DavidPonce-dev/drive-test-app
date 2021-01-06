<template>
  <div class="container-fluid bg-warning row h-100">
    <div class="col-sm-8 col-md-6 mx-auto my-auto">
      <div v-if="error != ''" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <Card :titulo="'Registrarse'">
        <form @submit.prevent="submit">
          <div class="mb-3">
            <label class="form-label">Nombre completo </label>
            <input
              type="text"
              class="form-control"
              v-model="user.displayName"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Correo electronico </label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="user.correo"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Contraseña </label>
            <input
              type="password"
              class="form-control"
              v-model="user.password"
            />
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
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      user: {
        displayName: "",
        correo: "",
        password: ""
      },
      error: ""
    };
  },
  components: {
    Card
  },
  methods: {
    async submit() {
      try {
        const data = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.user.correo, this.user.password);
        await data.user.updateProfile({ displayName: this.user.displayName });
        this.$router.push({ path: "/" });
      } catch (err) {
        this.error = err;
      }
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
