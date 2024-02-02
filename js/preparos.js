const imagemPreparoRotina = document.querySelector("#imagem-preparo-rotina");
const imagemPreparoRessonancia = document.querySelector("#imagem-preparo-ressonancia");
const botaoCopiarLink = document.querySelector("#btn-copiar-link");
const radiosPreparoRotina = document.getElementsByName("preparo");
const radiosPreparoRessonancia = document.getElementsByName("preparo-rm");

function exibePreparo(option) {
    let path = "../img/preparos";
    let imageTarget = "";
    let preparo = "";

    if (option === "ressonancia") {
        path += "/ressonancia";
        imageTarget = imagemPreparoRessonancia;
        preparo = Array.from(radiosPreparoRessonancia).find(r => r.checked).id;
    }
    else if (option === "rotina") {
        path += "/rotina";
        imageTarget = imagemPreparoRotina;
        preparo = Array.from(radiosPreparoRotina).find(r => r.checked).id;
    }

    imageTarget.src = `${path}/${preparo}.jpg`;
}

function copiarTexto(texto) {
    /*  Insere o texto na área de transferência
        e emite um alerta de texto copiado. */

    navigator.clipboard.writeText(texto)
    setTimeout(() => {
        alert('Texto copiado!');
    }, 350);
}

exibePreparo("rotina");
exibePreparo("ressonancia");
