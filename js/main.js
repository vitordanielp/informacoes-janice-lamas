const popup = document.getElementById("popup");
const iframe = document.getElementById("iframe-principal");
const botaoFecharPopup = document.getElementById("botao-fechar-popup");
const quadrosContainer = document.getElementById("quadros-container");
const quadros = document.querySelectorAll(".quadro");

quadros.forEach((quadro) => quadro.addEventListener("click", () => {
    if (!quadro.classList.contains("inativo")) {
        if (quadro.id !== "quadro-resultados") {
            popup.style.display = "flex";
            document.querySelector("#header-principal").classList.add("desfocado");
            document.querySelector("#main-container").classList.add("desfocado");
        }
    }
}));

function limparPopup() {
    iframe.src = "";
}

function fecharPopup() {
    limparPopup();
    popup.style.display = "none";
    document.querySelector("#header-principal").classList.remove("desfocado");
    document.querySelector("main").classList.remove("desfocado");
}
