const popup = document.getElementById("popup")
let conteudoPopup = document.getElementById("conteudo-popup")
const botaoFecharPopup = document.getElementById("botao-fechar-popup")
const quadrosContainer = document.getElementById("quadros-container")
const quadros = document.querySelectorAll(".quadro")

quadros.forEach((quadro) => quadro.addEventListener("click", () => {
    if (!quadro.classList.contains("inativo")) {
        if (quadro.id !== "quadro-resultados") {
            popup.style.display = "flex"
            document.querySelector("#header-principal").classList.add("desfocado")
            document.querySelector("#main-container").classList.add("desfocado")
            document.querySelector("#footer-principal").classList.add("desfocado")
        }
    }
}))

function limparPopup() {
    conteudoPopup.src = ""
}

function fecharPopup() {
    limparPopup()
    popup.style.display = "none"
    document.querySelector("#header-principal").classList.remove("desfocado")
    document.querySelector("main").classList.remove("desfocado")
    document.querySelector("#footer-principal").classList.remove("desfocado")
}
