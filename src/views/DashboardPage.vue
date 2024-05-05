<template>
  <div class="sideMenu">
    <aside>
      <button type="button" class="button"><a href="#">Home</a></button>
      <button type="button" class="button">
        <a href="/controle-acesso">Controle de acesso</a>
      </button>
      <button type="button" class="button"><a href="/relatorios">Relatórios</a></button>
      <button type="button" class="button"><a href="/monitor-acesso">Monitor de acesso</a></button>
      <button type="button" class="button"><a href="/cadastro">Cadastros</a></button>
      <button type="button" class="button"><a href="/configuracao">Configuração</a></button>
      <button type="button" class="button"><a href="/registros">Registros</a></button>
    </aside>
  </div>
  <div>
    <div class="center1">
      <div class="box1">
        <h3 class="center">Monitoramento</h3>
        <table class="center2">
          <thead>
            <tr>
              <th>Cam ID</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Quantidade</th>
              <th>Status</th>
              <th>Observação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entrada in dadosEntrada" :key="entrada.id">
              <td class="ID">{{ entrada.id }}</td>
              <td class="Data">{{ entrada.dataEntrada }}</td>
              <td class="Horas">{{ entrada.horaEntrada }}</td>
              <td class="Quantidade">{{ entrada.quantEntrada }}</td>
              <td class="Observacao">{{ entrada.obsEntrada }}</td>
            </tr>
            <tr v-for="saida in dadosSaida" :key="saida.id">
              <td class="ID">{{ saida.id }}</td>
              <td class="Data">{{ saida.dataSaida }}</td>
              <td class="Horas">{{ saida.horaSaida }}</td>
              <td class="Quantidade">{{ saida.quantSaida }}</td>
              <td class="Observacao">{{ saida.obsSaida }}</td>
            </tr>
          </tbody>
        </table>
        <div></div>
      </div>
      <div class="box2">
        <h3 class="center">Gráfico dos Últimos 7 dias</h3>
        <canvas id="line-chart" width="800" height="400"></canvas>
      </div>
    </div>
    <div class="center1">
      <div class="box4">
        <h3 class="center">Movimentação</h3>
        <table class="center2">
          <thead>
            <tr>
              <th>Tempo real</th>
              <th>Quantidade de pessoas no Dia</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entrada in dadosEntrada" :key="entrada.id">
              <td class="Data">{{ entrada.dataEntrada }}</td>
              <td class="Hora">{{ entrada.horaEntrada }}</td>
              <td class="Quantidade">{{ entrada.quantEntrada }}</td>
            </tr>
            <tr v-for="saida in dadosSaida" :key="saida.id">
              <td class="Data">{{ saida.dataSaida }}</td>
              <td class="Horas">{{ saida.horaSaida }}</td>
              <td class="Quantidade">{{ saida.quantSaida }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="box3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Chart from 'chart.js/auto'
import type { AxiosResponse } from 'axios'

interface DadosEntrada {
  id: number
  dataEntrada: string
  horaEntrada: string
  quantEntrada: number
  obsEntrada: string
}

interface DadosSaida {
  id: number
  dataSaida: string
  horaSaida: string
  quantSaida: number
  obsSaida: string
}

export default {
  data() {
    return {
      dadosEntrada: [] as DadosEntrada[],
      dadosSaida: [] as DadosSaida[],
      chart: null as Chart | null
    }
  },
  mounted() {
    axios
      .get<DadosEntrada[]>('http://localhost:8080/registro/entrada')
      .then((responseEntrada: AxiosResponse<DadosEntrada[]>) => {
        this.dadosEntrada = responseEntrada.data

        return axios.get<DadosSaida[]>('http://localhost:8080/registro/saida')
      })
      .then((responseSaida: AxiosResponse<DadosSaida[]>) => {
        this.dadosSaida = responseSaida.data

        const data = this.processData(this.dadosEntrada, this.dadosSaida)

        this.renderChart(data)
      })

      .catch((error) => {
        console.error('Erro ao buscar dados:', error)
      })
  },
  methods:{
    processData(entradas: DadosEntrada[], saidas: DadosSaida[]) {

      const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

      const data = {
        labels: [] as string[],
        datasets: [
          {
            label: 'Entradas',
            data: [] as number[],
            borderColor: 'blue',
            fill:false
          },
          {
            label: 'Saídas',
            data: [] as number[],
            borderColor: 'red',
            fill:false
          }
        ]
      }

      const contagens: Record<string, { entradas:number, saidas: number }> = {}

      for (let i = 0; i < 7; i++) {
        contagens[diasDaSemana[i]] = {entradas: 0, saidas: 0 }
      }

      for (const saida of saidas) {
        const data = new Date(saida.dataSaida)
        const diaDaSemana = diasDaSemana[data.getDay()]
        contagens[diaDaSemana].saidas += saida.quantSaida
      }

      for (const diaDaSemana of diasDaSemana) {
        data.labels.push(diaDaSemana)
        data.datasets[0].data.push(contagens[diaDaSemana].entradas)
        data.datasets[1].data.push(contagens[diaDaSemana].saidas)
      }

      return data
    },
    renderChart(data: any) {
      const ctx = document.getElementById('line-chart') as HTMLCanvasElement
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'line',
          data,
          option: {

          }
        })
      } 
    }
  }
}
</script>

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

#tabela {
  border-collapse: collapse;
		margin: 50px;
}

thead {
  background-color: #f2f2f2;
}

th,
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

tbody {
  display: block;
  max-height: 200px;
  overflow-y: auto;
}

thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
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
  margin: 0px 10px 0px 10px;
  height: 40px;
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  text-align: start;
  border: 1px solid #ccc;
}

.col1 {
  background-color: #f3f6f9;
  margin: 0px 10px 0px 10px;
  height: 40px;
  border-radius: 5px;
  padding: 25px 0px 0px 10px;
  text-align: start;
  border: 1px solid #ccc;
}

.box1 {
  margin: 5px;
  align-items: center;
  justify-content: center;
  display: inline-block;
  border-color: #000;
  background-color: white;
  height: 320px;
  width: 1000px;
  color: #000;
  border-radius: 20px;
  border: 2px solid gray;
}

.box2 {
  margin: 5px;
  align-items: center;
  justify-content: center;
  display: inline-block;
  border-color: #000;
  background-color: white;
  height: 320px;
  width: 400px;
  color: #000;
  border-radius: 20px;
  border: 2px solid gray;
}
.box3 {
  margin: 5px;
  align-items: center;
  justify-content: center;
  display: inline-block;
  border-color: #000;
  background-color: black;
  height: 40vh;
  width: 84vh;
  color: #000;
  border-radius: 20px;
  border: 2px solid gray;
}

.box4 {
  margin: 5px;
  align-items: start;
  justify-content: start;
  display: inline-block;
  border-color: #000;
  background-color: white;
  height: 40vh;
  width: 80vh;
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
.center1 {
  display: flex;
  justify-content: start;
  align-items: start;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
