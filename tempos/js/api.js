// dom

const entrada_cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.tempo')
const previsao = document.querySelector('.texto-previsao')
const key = '0ad966783cfb2b680648d8a8e419cc40'

botao.addEventListener('click',buscaCidade)

async function buscaCidade(){

    cidade = entrada_cidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(resposta=>resposta.json())

    console.log(dados)



}