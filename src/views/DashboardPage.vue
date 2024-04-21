<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script lang="ts">
export default {
  components: {
		}
}
</script>

<template>
  <div class="sideMenu">
    <aside>
      <button type="button" class="button"><a href="#">Home</a></button>
      <button type="button" class="button"><a href="/controle-acesso">Controle de acesso</a></button>
      <button type="button" class="button"><a href="/relatorios">Relatórios</a></button>
      <button type="button" class="button"><a href="/monitor-acesso">Monitor de acesso</a></button>
      <button type="button" class="button"><a href="/cadastro">Cadastros</a></button>
      <button type="button" class="button"><a href="/configuracao">Configuração</a></button>
    </aside>
  </div>
  <div>
    <div class="center">
      <div class="box1">
        <h3 class="center">Monitoramento</h3>
        <table class="center">
          <tr>
            <th>Cam ID</th>
            <th>Quantidade</th>
            <th>Status</th>
            <th>Horario</th>
            <th>Observação</th>
          </tr>
          <tr>
            <td>Nome da Sala</td>
            <td>10 Pessoas</td>
            <td class="red">Saida</td>
            <td>13:00</td>
            <td></td>
          </tr>
          <tr>
            <td>Nome da Sala</td>
            <td>10 Pessoas</td>
            <td class="green">Entrada</td>
            <td>11:00</td>
            <td></td>
          </tr>
          <tr>
            <td>Nome da Sala</td>
            <td>03 Pessoas</td>
            <td class="red">Saida</td>
            <td>7:00</td>
            <td></td>
          </tr>
          <tr>
            <td>Nome da Sala</td>
            <td>02 Pessoas</td>
            <td class="green">Entrada</td>
            <td>6:00</td>
            <td></td>
          </tr>
        </table>
        <div></div>
      </div>
      <div class="box2">
        <table class="center">
          <br /><br />
          <tr>
            <th>Sala</th>
            <th>Movimentação do Dia</th>
          </tr>
          <tr>
            <td>Nome da Sala</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Nome da Sala</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Nome da Sala</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Nome da Sala</td>
            <td>2</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="center">
      <div class="box2">
        <br /><br />
        <h3 class="center">Pessoas na RedZone</h3>
        <label for="" class="center padding">
          <p>0</p>
        </label>
      </div>
      <div class="box1">
        <img class="img" src="../../Cam.ico" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 260px;
  width: 540px;
  border-radius: 20px;
}

.red {
  background-color: #e63349;
  color: white;
}

.green {
  background-color: #00ca72;
  color: white;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
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

.button > a {
  text-decoration: none;
  color: #fff;
}

.body {
  width: 85%;
  float: right;
}

.col {
  table-layout: fixed;
  margin: 0px 10px 0px 10px;
  height: 40px;
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  text-align: start;
  border: 1px solid #ccc;
}

.col1 {
  table-layout: fixed;
  background-color: #f3f6f9;
  margin: 0px 10px 0px 10px;
  height: 40px;
  border-radius: 5px;
  padding: 25px 0px 0px 10px;
  text-align: start;
  border: 1px solid #ccc;
}

.box1 {
  margin: 20px;
  align-items: center;
  justify-content: center;
  display: inline-block;
  border-color: #000;
  background-color: white;
  height: 260px;
  width: 540px;
  color: #000;
  border-radius: 20px;
  border: 2px solid gray;
}
.box2 {
  margin: 20px;
  align-items: center;
  justify-content: center;
  display: inline-block;
  border-color: #000;
  background-color: white;
  height: 260px;
  width: 350px;
  color: #000;
  border-radius: 20px;
  border: 2px solid gray;
}

.background {
  padding: 7px;
  background-color: #000;
  width: 400px;
  height: 38px;
  color: #000000;
  font-size: 16px;
  margin: 5px 5px;
}

.font {
  margin-bottom: 10px;
  color: #000;
}

.titulo {
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
}

.entrar {
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 25px;
  width: 91px;
  height: 29px;
  background-color: #5d5dff;
  color: white;
  font-size: 20px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
