const listaAutorizadores = [];
const grupos = document.querySelectorAll(".bloco-tabela");


class Autorizador {
    constructor(nome, convenios = []) {
        this.id = listaAutorizadores.length;
        this.nome = nome;
        this.convenios = convenios;
        this.grupo = this.id <= 2 ? 0 : 1;
    }
}


function incluirAutorizador(nome, convenios) {
    /* Cadastra novo Autorizador
    e inclui na listaAutorizadores */
    const autorizador = new Autorizador(
        nome = nome,
        convenios = convenios
    );
    listaAutorizadores.push(autorizador);
}


/* Adicionando autorizadores */
incluirAutorizador(nome = "gisele sandra", convenios = ["GEAP", "MPU", "SIS-SENADO", "SUL-AMÉRICA", "TRE", "TRF", "TST", "UNAFISCO", "UNIMED"]);
incluirAutorizador(nome = "ana ribeiro", convenios = ["AFFEGO", "CÂMARA", "PETROBRÁS", "PROASA", "SERPRO", "STJ", "STM", "TJDFT", "E-VIDA"]);
incluirAutorizador(nome = "kessia", convenios = ["AMIL", "ASSEFAZ", "BRB", "CAPESESP", "CONAB", "FASCAL", "GAMA SAÚDE", "GDF", "POLÍCIA FEDERAL", "POSTAL SAÚDE"]);
incluirAutorizador(nome = "andressa", convenios = ["AMHP", "BRADESCO", "CAESAN", "CAIXA", "CASEC", "CASEMBRAPA", "CASSI", "MEDSERVICE", "STF", "TRT"]);
incluirAutorizador(nome = "patricia", convenios = ["GESTÃO DE AGENDAS", "ACOMPANHAMENTO DE RESSONÂNCIA - TOMOSSÍNTESE - NUTRIÇÃO"]);


/* Preenchimento da tabela */
function exibirNome(autorizador) {
    /* Localiza elemento correspondente
    ao ID do autorizador recebido e exibe
    seu nome no local correto da tabela */
    const target = document.querySelector(`#autorizador-${autorizador.id}`);
    target.textContent = autorizador.nome.toUpperCase();
}


function exibirConvenios(autorizador) {
    for (index in autorizador.convenios) {
        let grupo = autorizador.grupo;
        let target = document.querySelector(`#tbody-${grupo} > #tbody-${grupo}-linha-${index} > .coluna-${autorizador.id}`);
        target.textContent = autorizador.convenios[index];
    }
}


function incluirLinhas() {
    for (let autorizador of listaAutorizadores) {
        const grupo = document.querySelector(`#tbody-${autorizador.grupo}`);
        let qntLinhas = grupo.childElementCount;

        while (qntLinhas <= autorizador.convenios.length) {
            let row = document.createElement("tr");
            row.setAttribute("id", `${grupo.id}-linha-${qntLinhas - 1}`);
            row.setAttribute("class", "linha-tabela");
            grupos[autorizador.grupo].appendChild(row);
            for (let i = 0; i <= 2; i++) {
                if (autorizador.grupo == 0) {
                    row.appendChild(adicionarColuna(i));
                }
                else {
                    row.appendChild(adicionarColuna(i + 3));
                }
            }
            qntLinhas++;
        }
    }
}


function adicionarColuna(index) {
    let td = document.createElement("td");
    td.setAttribute("class", `coluna-${index}`);
    return td;
}


function preencherTabela() {
    /* Executa as funções necessárias para preencher tabela */
    incluirLinhas();
    for (let autorizador of listaAutorizadores) {
        exibirNome(autorizador);
        exibirConvenios(autorizador);
    }
    const tableDatas = document.querySelectorAll("td");
    for (data of tableDatas) {
        if (!data.textContent) {
            data.classList.add("vazio");
        }
    }
}


preencherTabela();
