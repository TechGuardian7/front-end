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
      <button type="button" class="button"><a href="/controle-acesso">Controle de acesso</a></button>
      <button type="button" class="button"><a href="/relatorios">Relatórios</a></button>
      <button type="button" class="button"><a href="/monitor-acesso">Monitor de acesso</a></button>
      <button type="button" class="button"><a href="/cadastro">Cadastros</a></button>
      <button type="button" class="button"><a href="/configuracao">Configuração</a></button>
      <button type="button" class="button"><a href="/registroEntrada">Registros</a></button>
    </aside>
  </div>
  <div class="center">
    <div class="box1">
        <h3 class="center">Edição de Registro</h3>
        <br>
        <div>
            <label for="text" style="color: #FF0000;">Redzone</label>
        </div>
        <br>
        <div>
            <input type="text" placeholder="Redzone" class="input1">
        </div>
        <br>
        <div>
            <input type="text" placeholder="Data de Procura" class="input2">
        </div>
        <br>
        <div class="container">
            <label for="horario">Horario:</label>
            <input type="text" id="horario" class="input2">
        </div>
        <br>
        <div class="container">
            <label for="quantidade">Quantidade de Pessoas:</label>
            <input type="text" id="quantidade" class="input2">
        </div>
        <br><br><br>
        <div class="center">
          <RouterLink to="/registroEntrada">
            <button @click="entrar" class="button2">Entrada</button>
          </RouterLink>
          <RouterLink to="/registroSaida">
            <button @click="entrar" class="button1">Saida</button>
          </RouterLink>
            <button class=" button3">Confirmar</button>
            <button class="button4">Excluir</button>
        </div>

    </div>
  </div>
</template>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        padding: 20px; 
    }
    .container label {
        text-align: left;
    }

    .container input {
        text-align: right
    }
.input1{
  margin: 5px;
  width: 682px;
  height: 30px;
  font-size: 15px;
}
.input2{
  text-align: center;
  margin: 5px;
  width: 100px;
  height: 25px;
  font-size: 15px;
}
.style{
  align-items:center;
  display: flex;
  flex-direction: row;
}
.box1 {
  margin: 5px;
  align-items: center;
  justify-content: center;
  display: inline-block;
  border-color: #000;
  background-color: white;
  height: 550px;
  width: 700px;
  color: #000;
  border-radius: 20px;
  border: 2px solid gray;
  }
.center {
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center1{
  margin: 5px;
  display: flex;
  justify-content: start;
  align-items: start;
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
.button1{
  margin: 5px;
  background-color: #1DA4FB;
  color: #000;
  border-radius: 15px;
  font-size: 20px;
  height: 47px;
  width: 150px;
  border-color: #000;
}
.button2{
  margin: 5px;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  font-size: 20px;
  height: 47px;
  width: 150px;
  border-color: #000;
}
.button3{
  margin: 5px;
  background-color: #01A84D;
  color: #000;
  border-radius: 15px;
  font-size: 20px;
  height: 47px;
  width: 150px;
  border-color: #000;
}
.button4{
  margin: 5px;
  background-color: #FF0000;
  color: #000;
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
