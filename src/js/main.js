const popup = document.querySelector("#popup")
let headerPopup = document.querySelector("#header-popup")
let tituloPopup = document.querySelector("#titulo-popup")
let conteudoPopup = document.querySelector("#conteudo-popup")
const botaoFecharPopup = document.querySelector("#botao-fechar-popup")
const quadrosContainer = document.querySelector("#quadros-container")
const quadros = document.querySelectorAll(".quadro")

// EventListeners
botaoFecharPopup.addEventListener("click", fecharPopup)

quadros.forEach((quadro) => quadro.addEventListener("click", () => {
    if (!quadro.classList.contains("inativo")) {
        popup.classList.remove("oculto")
        document.querySelector("#header-principal").classList.add("desfocado")
        document.querySelector("main").classList.add("desfocado")
    }
}))


// Textos informativos
function conteudoMamografia() {
    tituloPopup.textContent = "Mamografia"
    let subtitulo = document.createElement("h3")
    let subtitulo1 = document.createElement("h3")
    let texto = document.createElement("p")
    let texto1 = document.createElement("p")
    subtitulo.textContent = "Mamografia digital 3D (tomossíntese)"
    texto.textContent = `A mamografia 3D ou tomossíntese é uma técnica inovadora que aumenta a possibilidade de detecção precoce do câncer de mama. Ela permite a visualização de lesões ocultas, em particular pequenas distorções, por meio de cortes milimétricos com reconstrução 3D da mama, realizada por software.`
    subtitulo1.textContent = "Consulta mamografia"
    texto1.textContent = "O exame clínico das mamas é realizado por médica radiologista especialista, em conjunto com a entrevista para invertigação dos fatores de risco, análise comparativa com os exames anteriores e a correlação com outros exames de imagens, sendo as explicações sobre o exame realizado e fornecidas diretamente para a paciente."

    subtitulo.classList.add("subtitulo-informacoes")
    subtitulo1.classList.add("subtitulo-informacoes")
    texto.classList.add("texto-informacoes")
    texto1.classList.add("texto-informacoes")
    return [subtitulo, texto, subtitulo1, texto1]
}

function alterarPopup(conteudo) {
    if (popup.classList.contains("oculto")) {
        for (element of conteudo) {
            conteudoPopup.appendChild(element)
        }
    }
}

function limparPopup() {
    tituloPopup.textContent = ""
    conteudoPopup.innerHTML = ""
}

function fecharPopup() {
    limparPopup()
    popup.classList.add("oculto")
    document.querySelector("#header-principal").classList.remove("desfocado")
    document.querySelector("main").classList.remove("desfocado")
}
