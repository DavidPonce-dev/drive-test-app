<template>
  <div class="card">
    <img
      v-if="imgSrc != ''"
      :src="imgSrc"
      class="card-img-top"
      style="max-height:100px"
      alt="..."
    />
    <div class="card-body">
      <h5 v-if="titulo != ''" class="card-title">{{ titulo }}</h5>
      <p class="card-text"><slot /></p>
      <router-link
        class="btn btn-primary"
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        >{{ link.texto }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: false,
      default: ""
    },
    imgSrc: {
      type: String,
      required: false,
      default: ""
    },
    links: {
      type: Array,
      required: false,
      default: () => []
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 0 5px;
}
</style>
