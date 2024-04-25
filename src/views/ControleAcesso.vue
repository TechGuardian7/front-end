<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
export default {
  components: {}
}
</script>

<template>
  <div class="sideMenu">
    <aside>
      <button type="button" class="button"><a href="/dashboard">Home</a></button>
      <button type="button" class="button"><a href="#">Controle de acesso</a></button>
      <button type="button" class="button"><a href="/relatorios">Relatórios</a></button>
      <button type="button" class="button"><a href="/monitor-acesso">Monitor de acesso</a></button>
      <button type="button" class="button"><a href="/cadastro">Cadastros</a></button>
      <button type="button" class="button"><a href="/configuracao">Configuração</a></button>
    </aside>
  </div>
  <div class="center">
    <h3 class="center">Controle de acesso</h3>
  </div>
</template>

<style>
.sideMenu {
  background-color: #5291d6;
  min-height: 728px;
  width: 170px;
  float: left;
}

.button {
  width: 100%;
  height: 50px;
  margin-top: 10%;
  background-color: #5291d6;
  color: #fff;
  font-size: 20px;
  border: none;
}

.button > a {
  text-decoration: none;
  color: #fff;
}

.body {
  width: 85%;
  float: right;
}
</style>
