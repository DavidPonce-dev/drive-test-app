<template>
  <div class="container-fluid row bg-warning">
    <div class="col-sm-5 col-md-4 col-lg-3">
      <LeftBar></LeftBar>
    </div>
    <div class="col-sm"></div>
    <div class="col-sm-4 col-md-3">
      <RightBar />
    </div>
  </div>
</template>

<script>
import RightBar from "../components/RightBar.vue";
import LeftBar from "../components/LeftBar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LeftBar,
    RightBar
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
