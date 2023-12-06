const medicosNaTabela = document.querySelectorAll(".td-medico");
const imagemEscala = document.querySelector("#imagem-escala");

class Medico {
    constructor(nome, sexo, unidade, especialidade, tipoRegistro, numeroRegistro, seletor, categorias) {
        this.nome = nome;
        this.sexo = sexo;
        this.unidade = unidade;
        this.especialidade = especialidade;
        this.tipoRegistro = tipoRegistro;
        this.numeroRegistro = numeroRegistro;
        this.seletor = seletor;
        this.categorias = categorias;

    }

    getCategorias() {
        let lista = [];
        for (let categoria of this.categorias) {
            switch (categoria) {
                case 0: lista.push("ecografia");
                    break;
                case 1: lista.push("mamografia");
                    break;
                case 2: lista.push("densitometria");
                    break;
                case 3: lista.push("ressonância");
                    break;
                case 4: lista.push("somente laudos");
                    break;
                case 5: lista.push("consulta nutricional");
                    break;
                case 6: lista.push("tomossíntese");
                    break;
                default: return;
            }
        }
        return lista.join(", ");
    }
}

const medicos = []

function adicionarMedico(nome, sexo, unidade, especialidade, tipoRegistro, numeroRegistro, seletor, categorias) {
    const medico = new Medico(nome, sexo, unidade, especialidade, tipoRegistro, numeroRegistro, seletor, categorias);
    medicos.push(medico);
}

// TODO: adicionar função de exibir a imagem de cada médico
function exibeInformacao() {
    medicosNaTabela.forEach(td => { td.classList.remove("destaque-escala") });
    const selected = document.querySelector("input:checked");
    const nomeMedico = document.getElementById("nome-medico");
    const especialidade = document.getElementById("especialidade");
    const unidade = document.getElementById("unidade-atendimento");
    const medico = medicos.find((medico) => medico.seletor === selected.id);
    const iconeMedico = document.querySelector("#icone-medico");
    const tipoRegistro = document.querySelector("#tipo-registro");
    const numeroRegistro = document.querySelector("#numero-registro");
    const categoria = document.querySelector("#categoria");
    nomeMedico.textContent = medico.nome;
    tipoRegistro.textContent = medico.tipoRegistro;
    numeroRegistro.textContent = medico.numeroRegistro;
    especialidade.textContent = medico.especialidade;
    categoria.textContent = medico.getCategorias();
    medico.sexo === "M" ? iconeMedico.src = "../img/medico.png" : iconeMedico.src = "../img/medica.png";
    unidade.textContent = medico.unidade;
    for (let i of medicosNaTabela) {
        if (i.classList.contains(medico.seletor)) {
            i.classList.add("destaque-escala");
        }
    }
}

// TODO: trazer informações de médicos via JSON
adicionarMedico(
    nome = "Adriana Dias de Farias Figueiredo",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "ginecologista",
    tipoRegistro = "CRM",
    numeroRegistro = "19607",
    seletor = "dra-adriana-dias",
    categorias = [0, 1]);

adicionarMedico(
    nome = "Adriana Sousa Freire",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "21125",
    seletor = "dra-adriana-freire",
    categorias = [0]);

adicionarMedico(
    nome = "Alessandra Cerri Bertolino Fonseca",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "21585",
    seletor = "dra-alessandra",
    categorias = [0]);

adicionarMedico(
    nome = "Alexander Tavares Daud",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "angiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11981",
    seletor = "dr-alexander",
    categorias = [0]);

adicionarMedico(
    nome = "Alexandra Ferreira Silva",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11300",
    seletor = "dra-alexandra",
    categorias = [0]);

adicionarMedico(
    nome = "Aline Catunda de Clodoaldo Pinto",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "17972",
    seletor = "dra-aline",
    categorias = [0]);

adicionarMedico(
    nome = "Amanda Assis da Silva Lima",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "21116",
    numeroRegistro = "CRM",
    seletor = "dra-amanda",
    categorias = [0]);

adicionarMedico(
    nome = "Ana Lívia Prado de Meneses Lopes",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "19148",
    seletor = "dra-ana-livia",
    categorias = [0]);

adicionarMedico(
    nome = "Carla Maria da Silva Araújo",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "14935",
    seletor = "dra-carla-maria",
    categorias = [0]);

adicionarMedico(
    nome = "Carla Concolato",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "22066",
    seletor = "dra-carla-concolato",
    categorias = [0]);

adicionarMedico(
    nome = "Henrique Metzger",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "17411",
    seletor = "dr-henrique",
    categorias = [0]);

adicionarMedico(
    nome = "Iris Gardênia Cavalca e Silva",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "mastologista",
    tipoRegistro = "CRM",
    numeroRegistro = "10842",
    seletor = "dra-iris",
    categorias = [0]);

adicionarMedico(
    nome = "Janice Magalhães Lamas",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "3570",
    seletor = "dra-janice",
    categorias = [6]);

adicionarMedico(
    nome = "Juliana Catão Grisi",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "mastologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11295",
    seletor = "dra-juliana",
    categorias = [0]);

adicionarMedico(
    nome = "Larissa Ravila Sacch de Oliveira",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "19687",
    seletor = "dra-larissa",
    categorias = [0]);

adicionarMedico(
    nome = "Lorena Francisca Moura de Freitas Carvalho",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "8214",
    seletor = "dra-lorena",
    categorias = [0]);

adicionarMedico(
    nome = "Marcelo Bittencourt Barreiros",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "7203",
    seletor = "dr-marcelo",
    categorias = [0]);

adicionarMedico(
    nome = "Márcia Cristina Dias da Costa",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "4906",
    seletor = "dra-marcia-cristina",
    categorias = [0]);

adicionarMedico(
    nome = "Marcia Da Rocha Carneiro Barreiros",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "7697",
    seletor = "dra-marcia-barreiros",
    categorias = [0]);

adicionarMedico(
    nome = "Márcia Laporte",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "28342",
    seletor = "dra-marcia-laporte",
    categorias = [0]);

adicionarMedico(
    nome = "Melissa Severo De Brito",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "30978",
    seletor = "dra-melissa",
    categorias = [0]);

adicionarMedico(
    nome = "Mirley Do Prado",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "7591",
    seletor = "dra-mirley",
    categorias = [0]);

adicionarMedico(
    nome = "Oliviane Basílio D'Oliveira de Teixeira",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "5375",
    seletor = "dra-oliviane",
    categorias = [0]);

adicionarMedico(
    nome = "Osmar Pellegrini Júnior",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "mastologista",
    tipoRegistro = "CRM",
    numeroRegistro = "21768",
    seletor = "dr-osmar",
    categorias = [0]);

adicionarMedico(
    nome = "Priscilla Abdalla Cruz",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "24132",
    seletor = "dra-priscilla",
    categorias = [0]);

adicionarMedico(
    nome = "Renata Cristina Silva Trinta",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11595",
    seletor = "dra-renata-trinta",
    categorias = [0]);

adicionarMedico(
    nome = "Renata Tavazzi Estrela",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11609",
    seletor = "dra-renata-estrela",
    categorias = [0]);

adicionarMedico(
    nome = "Sádja Sammara Gamma Rodrigues",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "14834",
    seletor = "dra-sadja",
    categorias = [0]);

adicionarMedico(
    nome = "Sérgio Eduardo Costa Sampaio",
    sexo = "M",
    unidade = "lago sul",
    especialidade = "ginecologista",
    tipoRegistro = "CRM",
    numeroRegistro = "4414",
    seletor = "dr-sergio",
    categorias = [0]);

adicionarMedico(
    nome = "Silvio Braz de Paixão",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "ginecologista",
    tipoRegistro = "CRM",
    numeroRegistro = "10605",
    seletor = "dr-silvio",
    categorias = [0]);

adicionarMedico(
    nome = "Thaís Magalhães Lamas",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "nutricionista",
    tipoRegistro = "CRN/DF",
    numeroRegistro = "2559",
    seletor = "dra-thais-lamas",
    categorias = [5]);

adicionarMedico(
    nome = "Thays Vieira De Vasconcelos Sousa",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "23969",
    seletor = "dra-thays-vieira",
    categorias = [0]);

adicionarMedico(
    nome = "Yara Cristina Rocha Tanezini",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "2920",
    seletor = "dra-yara",
    categorias = [0]);
    
// TODO: adicionar inputs de médicos via script
exibeInformacao()
