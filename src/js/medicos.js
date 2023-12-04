const medicosNaTabela = document.querySelectorAll(".td-medico");

class Medico {
    constructor(nome, unidade, especialidade, seletor) {
        this.nome = nome;
        this.unidade = unidade;
        this.especialidade = especialidade;
        this.seletor = seletor;
    }
}

const medicos = []

function adicionarMedico(nome, unidade, especialidade, seletor) {
    const medico = new Medico(nome, unidade, especialidade, seletor);
    medicos.push(medico);
}

// TODO: adicionar função de exibir a imagem de cada médico
function exibeInformacao() {
    medicosNaTabela.forEach(td => {td.classList.remove("destaque-escala")});
    const selected = document.querySelector("input:checked");
    const nomeMedico = document.getElementById("nome-medico");
    const especialidade = document.getElementById("especialidade");
    const unidade = document.getElementById("unidade-atendimento");
    const medico = medicos.find((medico) => medico.seletor === selected.id);
    nomeMedico.textContent = medico.nome;
    especialidade.textContent = medico.especialidade;
    unidade.textContent = medico.unidade;
    for (let i of medicosNaTabela) {
        if (i.classList.contains(medico.seletor)) {
            i.classList.add("destaque-escala");
        }
    }
}

adicionarMedico("Adriana Sousa Freire", "ambas", "radiologista", "dra-adriana-freire");
adicionarMedico("Alexander Tavares", "ambas", "angiologista", "dr-alexander");
adicionarMedico("Amanda Assis", "ambas", "radiologista", "dra-amanda");
adicionarMedico("Janice Magalhães Lamas", "ambas", "mastologista", "dra-janice");
adicionarMedico("Larissa", "ambas", "radiologista", "dra-larissa");
adicionarMedico("Sergio Sampaio", "lago sul", "ginecologista", "dr-sergio");
adicionarMedico("Thais Magalhães Lamas", "asa sul", "nutricionista", "dra-thais-lamas");

exibeInformacao()
