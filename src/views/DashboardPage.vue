<!-- eslint-disable vue/multi-word-component-names -->
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
	<div>
		<div class="center">
			<div class="box">
				<label class="center" for="">Quantas pessoas atualmente</label>
			</div>
			<div class="box">
				<label class="center" for="">Horario das pessoas de hoje </label>
			</div>
		</div>
		<div class="center">
			<div class="box">
				<label class="center" for="">Registro de pessoas e seu horario.</label>
			</div>
			<div class="box">
				<label class="center" for="">Tela de video</label>
			</div>
		</div>
	</div>
</template>

<style scoped>

.space{
margin-right: 101px;
}

.space1{
margin-right: 170px;
}

.space2{
margin-right: 130px;
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

.button1{
color: white;
width: 91px;
height: 29px;
background-color: #E63349;
border-radius: 5px;
}

.button2{
color: white;
width: 91px;
height: 29px;
background-color: #1DA4FB;
border-radius: 5px;
}

.button3{
color: white;
width: 91px;
height: 29px;
background-color: #00CA72;
border-radius: 5px;
}

.box{ 
margin: 20px;
align-items: center;
justify-content: center;
display: inline-block;
border-color: #000;
background-color: white;
height: 250px;
width: 500px;
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

.titulo{
text-align: center;
font-size: 25px;
font-weight: bolder;
}

.entrar{
border-radius: 10px;
margin-top: 50px;
margin-bottom: 25px;
width: 91px;
height: 29px;
background-color: #5D5DFF;
color: white;
font-size: 20px;
}

.center{
display: flex;
justify-content: center;
align-items: center;
}

.icon{
display: flex;
justify-content: center;
align-items: center;
}
</style>