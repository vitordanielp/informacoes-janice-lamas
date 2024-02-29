const botaoAvancar = document.querySelector("#botao-avancar");
const botaoRetroceder = document.querySelector("#botao-retroceder");
const botaoAsaSul = document.querySelector("#botao-asa-sul");
const botaoLagoSul = document.querySelector("#botao-lago-sul");
const sectionAsa = document.querySelector("#asa-sul");
const sectionLago = document.querySelector("#lago-sul");
let salasAsa, salasLago;
const unidades = ["asa sul", "lago sul"];
const periodos = ["manha", "tarde"];
const diaSemana = ["segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
let data = new Date();

/*
EventListeners para
botões da página
*/
botaoRetroceder.addEventListener("click", () => {
    data.setDate(data.getDate() - 7);
    for (let unidade of unidades) {
        apagarTabelas();
        getSalas(unidade);
    }
});

botaoAvancar.addEventListener("click", () => {
    data.setDate(data.getDate() + 7);
    for (let unidade of unidades) {
        apagarTabelas();
        getSalas(unidade);
    }
});

botaoAsaSul.addEventListener("click", () => {
    if(sectionAsa.classList.contains("oculto")) {
        sectionAsa.classList.remove("oculto");
        sectionLago.classList.toggle("oculto");
    }
    botaoAsaSul.classList.add("botao-pressionado");
    botaoLagoSul.classList.remove("botao-pressionado")
});

botaoLagoSul.addEventListener("click", () => {
    if(sectionLago.classList.contains("oculto")) {
        sectionLago.classList.remove("oculto");
        sectionAsa.classList.toggle("oculto");
    }
    botaoLagoSul.classList.add("botao-pressionado");
    botaoAsaSul.classList.remove("botao-pressionado")
});

/*
Buscar data de segunda-feira
da semana atual
*/
while (data.getDay() > 1) {
    data.setDate(new Date(data.getDate()) - 1);
}

/*
Obter salas de cada unidade
*/
function getSalas(unidade) {
    unidade = unidade.replace(" ", "-");
    fetch(`https://vitordanielp.github.io/escalas/dados/${unidade}/salas.txt`)
        .then(response => response.text())
        .then(response => response.split(";"))
        .then(response => {
            if (unidade === "asa-sul") {
                response.pop()
                salasAsa = response;
                montarTabela(sectionAsa, unidade, salasAsa)
            }
            else {
                response.pop()
                salasLago = response;
                montarTabela(sectionLago, unidade, salasLago)
            }
        });
}


/*
Função genérica para request síncrono
*/
function synchronousRequest(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status === 200) {
        return xhr.responseText;
    } else {
        throw new Error('Request failed: ' + xhr.statusText);
    }
}

/*
Obter dados de tabela
*/
function getDados(unidade, sala) {
    try {
        const url = `https://vitordanielp.github.io/escalas/dados/${unidade}/${sala}.json`;
        const responseData = JSON.parse(synchronousRequest(url));
        return responseData;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

/*
Apaga todas as
tabelas da página
*/
function apagarTabelas() {
    let tabelas = document.querySelectorAll(".escala-table");
    tabelas.forEach(tabela => tabela.remove());
}


/*
Monta estrutura de tabelas
e preenche os dados com a
função getDados()
*/
function montarTabela(target, unidade, salas) {

    /*
    Preenche as datas da semana atual
    */
    function preencheDatas() {
        let diaAtual = new Date(data);
        for (let i = 1; i <= 6; i++) {
            for (let el of document.querySelectorAll(`.data-${i}`)) {
                el.textContent = diaAtual.toLocaleDateString();
            }
            diaAtual.setDate(new Date(diaAtual.getDate() + 1));
        }
    }

    target.innerHTML += `
    <table class="escala-table" id="escala-${unidade}">
        <thead>
            <tr>
                <th colspan="7" class="nome-unidade">${unidade.toUpperCase().replace("-", " ")}</th>
            </tr>
        </thead>
    </table>`

    for (let periodo of periodos) {
        let target = document.querySelector(`#escala-${unidade}`);
        let nomePeriodo = periodo === periodos[0] ? "Manhã" : "Tarde";
        let tbody = `
        <tbody id="tbody-${unidade}-${periodo.toLowerCase()}">
            <tr>
                <th rowspan="2" class="multi-row periodo">${nomePeriodo}</th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
                <th>Sexta</th>
                <th>Sábado</th>
            </tr>
            <tr class="datas-semana">
                <th class="data-1"></th>
                <th class="data-2"></th>
                <th class="data-3"></th>
                <th class="data-4"></th>
                <th class="data-5"></th>
                <th class="data-6"></th>
            </tr>
        </tbody>`

        periodo == periodos[0] ? tbody += "<div class='espaco'>" : false;
        target.innerHTML += tbody;

        preencheDatas();
        target = document.querySelector(`#tbody-${unidade}-${periodo.toLowerCase()}`);
        let count, data, dados, medico, escala;

        for (let sala of salas) {
            count = 1;
            let linhaMedicos = `<tr class="linha-medicos"><th>${sala}`;
            target.innerHTML += linhaMedicos;
            dados = getDados(unidade, sala);

            for (let dia of diaSemana) {
                data = document.querySelector(`.data-${count}`).textContent;
                escala = dados.find(obj => obj.data === data && obj.periodo === periodo.toUpperCase());
                medico = escala != undefined ? escala.medico : "-"
                let td = `<td class="medico ${dia}">${medico.toLowerCase()}`;
                target.lastChild.innerHTML += td;
                count++;
            }
        }
    }
}

for (let unidade of unidades) {
    getSalas(unidade);
}
