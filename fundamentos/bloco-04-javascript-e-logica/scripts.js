/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()




        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function mudarTexto() {
  let texto = document.getElementsByTagName("p")[1];
  texto.innerHTML = "Daqui a 2 anos estarei em LA...";
}
mudarTexto();

function mudarCorDoQuadrado() {
  let quadradoAmarelo = document.getElementsByClassName("main-content")[0];
  quadradoAmarelo.style.background = "rgb(76,164,109)";
}
mudarCorDoQuadrado();

function mudarCorDoQuadradoParaBranco() {
  let quadradoVermelho = document.getElementsByClassName("center-content")[0];
  quadradoVermelho.style.background = "white";
}
mudarCorDoQuadradoParaBranco();

function corrigirTexto() {
  let texto = document.getElementsByClassName("title")[0];
  texto.innerText = "Exercício 5.1 - Javascript";
}
corrigirTexto();

function modificarParaMaiúsculo() {
  let textoTagP = document.getElementsByTagName("p")[0];
  textoTagP.innerHTML = textoTagP.innerHTML.toUpperCase();
}
modificarParaMaiúsculo();

function exibirConteudo() {
  let p = document.getElementsByTagName("p");
  for (let i = 0; i < p.length; i += 1) {
    console.log(p[i].innerHTML);
  }
}
exibirConteudo();
