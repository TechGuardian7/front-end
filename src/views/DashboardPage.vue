<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- chamar a id de identifação-->
<!-- chamar a id de quantidade-->
<!-- chamar a id de horario-->
<script lang="ts">
import axios from 'axios'
export default {
  data() {
    return {
      dadosDoBackend: null
    }
  },
  created() {
    // Fazendo uma requisição GET para o endpoint do backend
    axios
      .get('http://localhost:8080/registro')
      .then((response) => {
        // Armazenando os dados recebidos do backend
        this.dadosDoBackend = response.data
      })
      .catch((error: any) => {
        console.error('Erro ao buscar dados do backend:', error)
      })
  },
  methods: {
    // Função para identifica o ID
    identificarID(id: number) {
      if (id === null) {
        return 'Informação invalida'
      } else {
        return id
      }
    },
    // Função para identificar a Quantidade
    identificarQuantidadde(quantidade: number) {
      if (quantidade === null) {
        return 'Não registrado pela I.A.'
      } else {
        return quantidade
      }
    },
    // Função para identificar o Horario
    identifiacarHorario(horario: Date) {
      if (horario === null) {
        return 'Não regista pela I.A.'
      } else {
        return horario
      }
    },
    // Função para identificar entrada e saída
    identificarEntradaSaida(status: string) {
      return status === 'Entrada' ? 'Entrada' : 'Saída'
    },
    // Função para identificar se a observação é full ou null
    identificarObservacao(obs: string | null) {
      if (obs === null || obs === '') {
        return 'Null'
      } else {
        return 'Full'
      }
    }
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
            <th>Horario</th>
            <th>Status</th>
            <th>Observação</th>
          </tr>
          <!-- Loop através dos dados do backend -->
          <tr v-for="(item, index) in dadosDoBackend" :key="index">
            <td class="id">{{ identificarId(item.id) }}</td>
            <td class="quantidade">{{ identificarQuantidadde(item.quantidade) }}</td>
            <td class="hora">{{ identifiacarHorario(item.horario) }}</td>
            <td class="status">{{ identificarEntradaSaida(item.status) }}</td>
            <td class="observacao">{{ identificarObservacao(item.observacao) }}</td>
          </tr>
        </table>
        <div></div>
      </div>
      <div class="box2">
        <p>gráfico</p>
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
      <div class="box1" style="background-color: black;">
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
.box3 {
    margin: 20px;
    align-items: center;
    justify-content: center;
    display: inline-block;
    border-color: #000;
    background-color: black;
    height: 260px;
    width: 540px;
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