<template>
  <div class="sidebar">
    <div class="texto">
      <h3>Nuestra mision</h3>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab
      numquam harum, fuga ratione eligendi laudantium repellendus, ad distinctio
      dolor, maxime laborum iure. Molestias quas, in ex aspernatur esse
      blanditiis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Voluptate ab numquam harum, fuga ratione eligendi laudantium repellendus,
      ad distinctio dolor, maxime laborum iure. Molestias quas, in ex aspernatur
      esse blanditiis.
    </div>
    <RightLogo class="w-100" />
  </div>
</template>
<script>
import RightLogo from "./RightLogo.vue";
export default {
  components: {
    RightLogo
  }
};
</script>

<style scoped>
h3 {
  margin: 25px 0;
}
th,
td {
  padding: 15px;
  text-align: justify;
}
.sidebar {
  width: 100%;
  height: calc(100vh - 40px);
  border-right: 1px solid #212529;
}
.texto {
  height: calc(80% - 40px);
}
</style>
