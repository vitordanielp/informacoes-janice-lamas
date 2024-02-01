const areaTreinamentos = document.getElementById("treinamentos-rm");
let path = "../img/treinamento-rm/";


function novaImagem(src) {
    return `
        <img class="imagem-treinamento" src="${src}"/>`;
}


for (let i = 1; i <= 14; i++) {
    let pathAtual = path + `Slide${i}.jpg`;
    areaTreinamentos.innerHTML += novaImagem(pathAtual);
}
