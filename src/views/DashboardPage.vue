<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script lang="ts">
export default {
	props: {
	},
	data() {
		return {
		};
	},
	methods: {
	},
};
</script>

<template>
	<div class="sideMenu">
		<aside>
			<button type="button" class="button"><a href="#">Home</a></button>
			<button type="button" class="button"><a href="#">Controle de acesso</a></button>
			<button type="button" class="button"><a href="#">Relatórios</a></button>
			<button type="button" class="button"><a href="#">Monitor de acesso</a></button>
			<button type="button" class="button"><a href="#">Cadastros</a></button>
			<button type="button" class="button"><a href="#">Configuração</a></button>
		</aside>
	</div>
	<div class="body">
		<div class="center">
			<div class="box">
				<label class="center" for="">LISTA DE PESSOA ATUAL NA SALA</label>
			</div>
			<div class="box">
				<label class="center" for="">LISTA DO HORARIO DAS PESSOAS  </label>
			</div>
		</div>
		<div class="center">
			<div class="box">
				<label class="center" for="">LISTA DAS ULTIMAS PESSOAS QUE ENTRARAM E SAIRAM.</label>
			</div>
			<div class="box">
				<label class="center" for="">TELA DE VIDEO</label>
			</div>
		</div>
	</div>
</template>

<style scoped>
.sideMenu{
	background-color: #1DA4FB;
	min-height: 745px;
	width: 15%;
	float: left;
}

.button{
	width: 100%;
	height: 50px;
	margin-top: 10%;
	background-color: #1DA4FB;
	color: #FFF;
	font-size: 20px;
	border: none;
}

.button > a{
	text-decoration: none;
	color: #FFF;
}

.body{
	width: 85%;
	float: right;
}

.col{
table-layout:fixed;
margin: 0px 10px 0px 10px;
height: 40px;
border-radius: 5px;
padding: 10px 10px 10px 10px;
text-align:start;
border: 1px solid #ccc;
}

.col1{
table-layout:fixed;
background-color: #F3F6F9;
margin: 0px 10px 0px 10px;
height: 40px;
border-radius: 5px;
padding: 25px 0px 0px 10px;
text-align:start;
border: 1px solid #ccc;
}

.box{ 
margin: 20px;
align-items: center;
justify-content: center;
display: inline-block;
border-color: #000;
background-color: white;
height: 300px;
width: 600px;
color: #000;
border-radius: 20px;
border: 2px solid gray;
}

.background{
padding: 7px;
background-color: #000;
width: 400px;
height: 38px;
color: #000000;
font-size: 16px;
margin: 5px 5px;
}

.font{
margin-bottom: 10px;
color: #000;
}

.center{
display: flex;
justify-content: center;
align-items: center;
}
</style>