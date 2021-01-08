<template>
  <div class="sidebar">
    <slot />
  </div>
</template>

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
</style>
