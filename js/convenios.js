const tabela = document.querySelector("#corpo-tabela");
let convenios = [];
let dados;
const pacotes = ["mamografia", "ampliação", "us mamas", "doppler"];


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


function addConvenio(nome, pacotes) {
    let convenio = new Convenio(nome, pacotes);
    convenios.push(convenio);
}


function getConvenios() {
    for (let obj of dados) {
        let pacotes = Object.values(obj);
        let nome = pacotes.shift();
        addConvenio(nome, pacotes);
    }
}


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
