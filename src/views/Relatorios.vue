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
      <button type="button" class="button">
        <a href="/controle-acesso">Controle de acesso</a>
      </button>
      <button type="button" class="button"><a href="/#">Relatórios</a></button>
      <button type="button" class="button"><a href="/monitor-acesso">Monitor de acesso</a></button>
      <button type="button" class="button"><a href="/cadastro">Cadastros</a></button>
      <button type="button" class="button"><a href="/configuracao">Configuração</a></button>
      <button type="button" class="button"><a href="/registroEntrada">Registros</a></button>
    </aside>
  </div>
  <div class="center">
    <div class="box1">
      <button class="button2">Relatorio</button>
      <div class="style">
        <h4>Data Inicial:</h4>
        <select class="input1 space" aria-label="small select example">
          <option selected></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="style">
        <h4>Data Final:</h4>
        <select class="input1 space" aria-label="small select example">
          <option selected></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="style">
        <div>
          <h4>Horario de Entrada:</h4>
          <input type="search" class="input2" />
        </div>
        <div>
          <h4 class="space">Horario de Saida:</h4>
          <input type="search" class="input2 space" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="style">
        <button class="button2 space">CSV</button>
        <button class="button3 space">PDF</button>
      </div>
    </div>
  </div>
</template>

<style>
.input1 {
  width: 150px;
  height: 35px;
}
.input2 {
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
}
.style {
  align-items: center;
  display: flex;
  flex-direction: row;
}
.space {
  margin-left: 260px;
}
.box1 {
  margin: 20px;
  align-items: center;
  justify-content: center;
  display: inline-block;
  border-color: #000;
  height: 600px;
  width: 1100px;
  color: #000;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
}
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
.button2 {
  background-color: #1da4fb;
  color: #fcfcfc;
  border-radius: 15px;
  font-size: 20px;
  height: 47px;
  width: 150px;
  border-color: #000;
}
.button3 {
  background-color: #ff0000;
  color: #fcfcfc;
  border-radius: 15px;
  font-size: 20px;
  height: 47px;
  width: 150px;
  border-color: #000;
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
