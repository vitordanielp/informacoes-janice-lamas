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
incluirAutorizador(nome = "silas sampaio", convenios = ["caixa (rm)", "cassi", "fascal", "gama saude", "policia federal", "postal saude", "stj", "stm", "trt (rm)"]);
incluirAutorizador(nome = "ana ribeiro", convenios = ["amil", "bacen", "conab", "evida", "gdf", "infraero", "petrobras", "tjdft", "tst"]);
incluirAutorizador(nome = "gisele sandra", convenios = ["affego", "camara", "capesesp", "geap", "tre", "trf"]);
incluirAutorizador(nome = "jacke rodrigues", convenios = ["bradesco", "brb", "caesan", "casec", "serpro", "sis", "sul america", "unimed"]);
incluirAutorizador(nome = "ana paula", convenios = ["amhp", "assefaz", "casembrapa", "medservice (careplus e omint)", "mpu", "proasa", "stf", "unafisco"]);
incluirAutorizador(nome = "raquel almeida", convenios = ["gestao de agendas", "acompanhamento da ressonancia"]);


/* Preenchimento da tabela */
function exibirNome(autorizador) {
    /* Localiza elemento correspondente
    ao ID do autorizador recebido e exibe
    seu nome no local correto da tabela */
    const target = document.querySelector(`#autorizador-${autorizador.id}`);
    target.textContent = autorizador.nome;
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
    for(data of tableDatas) {
        if(!data.textContent) {
            data.classList.add("vazio");
        }
    }
}


preencherTabela();
