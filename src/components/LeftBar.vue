<template>
  <div class="sidebar bg-dark color-dark">
    <table>
      <thead>
        <tr>
          <th>
            <img :src="require('../assets/img/Logo.png')" class="w-100" />
          </th>
        </tr>
      </thead>
      <slot />
    </table>
  </div>
</template>

<style scoped>
* {
  color: #fff;
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
