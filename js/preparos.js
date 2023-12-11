const imagemPreparo = document.querySelector("#imagem-preparo");
const botaoCopiarLink = document.querySelector("#btn-copiar-link");
const radiosPreparo = document.getElementsByName("preparo");
// const radiosPeriodo = document.getElementsByName("periodo");
const path = "../img/preparos";

function exibePreparo() {
    let preparo = Array.from(radiosPreparo).find(r => r.checked).id;
    imagemPreparo.src = `${path}/${preparo}.jpg`;

    /*  Faltam preparos para
        utilizar a função da
        forma correta.
     */
}

function copiarTexto(texto) {
    /*  Insere o texto na área de transferência
        e emite um alerta de texto copiado. */

    navigator.clipboard.writeText(texto)
    setTimeout(() => {
        alert('Texto copiado!');
    }, 350);
}

exibePreparo();
