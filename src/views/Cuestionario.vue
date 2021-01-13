<template>
  <div class="container-fluid row bg-warning">
    <div class="col-5 col-md-4 col-lg-3">
      <LeftBar></LeftBar>
    </div>
    <div class="col">
      <div class="container">
        asd
      </div>
    </div>
    <div class="col-4 col-md-3">
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
.container {
  background: #fff;
  width: 100%;
  position: relative;
}
.row > * {
  margin: 0;
  padding: 0;
}
</style>
