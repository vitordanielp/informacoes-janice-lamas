const tabela = document.querySelector("#corpo-tabela");
let convenios = [];  // novos convênios serão armazenados aqui
let dados;
const pacotes = ["mamografia", "ampliação", "us mamas"];


(async function () {
    fetch("https://vitordanielp.github.io/escalas/dados/pacotes/pacotes.json")
    .then(response => response.json())
    .then(response => {
        dados = response;
        getConvenios();
        for (let convenio of convenios) {
            addCells(convenio);
        }
    });
}())

class Convenio {
    constructor(nome, pacotes) {
        this.nome = nome;
        this.pacotes = pacotes;
    }
}

/*
Cria nova instância de Convenio
e armazena na Array convenios
*/
function addConvenio(nome, pacotes) {
    let convenio = new Convenio(nome, pacotes);
    convenios.push(convenio);
}

/*
Insere os convênios na lista
indicada no início do código.
*/
function getConvenios() {
    for (let obj of dados) {
        let pacotes = Object.values(obj);
        let nome = pacotes.shift();
        addConvenio(nome, pacotes);
    }
}

/* 
Adiciona os dados de cada
convênio na tabela.
*/
function addCells(convenio) {
    let content = `
    <tr class="linha-convenio" id="${convenio.nome.replaceAll(" ", "-")}">
    <th class="nome-convenio">${convenio.nome}`

    tabela.innerHTML += content;
    let linhaAtual = document.querySelector(`#${convenio.nome.replaceAll(" ", "-")}`);
    for (let i in pacotes) {
        linhaAtual.innerHTML += `<td class="${pacotes[i].replaceAll(" ", "-")}">${convenio.pacotes[i]}</td>`;
    }
}
