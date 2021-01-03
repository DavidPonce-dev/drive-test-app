<template>
  <div class="sidebar bg-dark color-dark">
    <table>
      <thead>
        <tr>
          <th>
            <img :src="require('../../assets/img/Logo.png')" class="w-100" />
          </th>
        </tr>
        <th>
          Bienvenido al sistema de ensayo teorico de la prueba de conducir para
          licencias tipo B
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            en esta aplicacion podrás evaluar y mejorar tus conocimientos con
            respecto a como funciona la ley de transito
          </td>
        </tr>
      </tbody>
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
