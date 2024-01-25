const listaAutorizadores = [];
const qntGrupos = 2;


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
incluirAutorizador(nome = "gisele sandra", convenios = ["affego", "camara", "capesesp", "geap", "tre", "trf"]);
incluirAutorizador(nome = "ana paula", convenios = ["amhp", "assefaz", "casembrapa", "medservice (careplus e omint)", "mpu", "proasa", "stf", "unafisco"]);
incluirAutorizador(nome = "ana ribeiro", convenios = ["amil", "bacen", "conab", "evida", "gdf", "infraero", "petrobras", "tjdft", "tst"]);
incluirAutorizador(nome = "jacke rodrigues", convenios = ["bradesco", "brb", "caesan", "casec", "serpro", "sis", "sul america", "unimed"]);
incluirAutorizador(nome = "silas sampaio", convenios = ["caixa (rm)", "cassi", "fascal", "gama saude", "policia federal", "postal saude", "stj", "stm", "trt (rm)"]);
incluirAutorizador(nome = "raquel almeida", convenios = ["gestao de agendas", "acompanhamento da ressonancia"]);


/* Preenchimento da tabela */
function exibirNome(autorizador) {
    /* Localiza elemento correspondente
    ao ID do autorizador recebido e exibe
    seu nome no local correto da tabela */
    const target = document.querySelector("#autorizador-" + autorizador.id);
    target.textContent = autorizador.nome;
}


function exibirConvenios(autorizador) {
    for (index in autorizador.convenios) {
        if (document.querySelector(`#linha-${autorizador.convenios.length - 1}`)) {
            let target = document.querySelector(`#tbody-${autorizador.grupo} > #linha-${index} > .coluna-${autorizador.id}`);
            target.textContent = autorizador.convenios[index];
        }

    }
}


function incluirColunas() {
    let qntColunas = listaAutorizadores.length / qntGrupos;
    let td = document.createElement("td");
    const linhas = document.querySelectorAll(".linha-convenios")
    for (linha of linhas) {

    }
}


/* 
TODO: resolver forma de adicionar
as linhas e colunas de acordo com
a quantidade necessária para cada
grupo de autorizadores
 */


function incluirLinhas() {
    let qntLinhas = 0;
    for (let autorizador of listaAutorizadores) {
        if (autorizador.convenios.length > qntLinhas + 1) {
            qntLinhas = autorizador.convenios.length;
        }
    }
    for (let i = 0; i <= qntLinhas; i++) {
        let row = document.createElement("tr");
        row.setAttribute("id", `linha-${i}`);
    }
}


function preencherTabela() {
    /* Executa as funções necessárias para preencher tabela */
    incluirLinhas();
    incluirColunas();
    for (let autorizador of listaAutorizadores) {
        exibirNome(autorizador);
        exibirConvenios(autorizador);
    }
}


preencherTabela();
