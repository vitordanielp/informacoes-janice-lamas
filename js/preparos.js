const imagemPreparo = document.querySelector("#imagem-preparo");
const selectPreparo = document.querySelector("#select-preparo");
// const radiosPeriodo = document.getElementsByName("periodo");
const path = "../img/preparos"

function exibePreparo() {
    /*  Faltam preparos para
        utilizar a função da
        forma correta.
     */

    // let periodoSelected = Array.from(radiosPeriodo).find(r => r.checked).value;
    
    if (selectPreparo.value !== "0") {
        imagemPreparo.classList = "imagem-preparo";
        imagemPreparo.src = `${path}/${selectPreparo.value}.jpg`;
    }
    else {
        imagemPreparo.classList = "elemento-oculto";
    }


}

exibePreparo();
