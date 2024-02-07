let observacoesContainer = document.querySelector("#observacoes-container");
const medicosNaTabela = document.querySelectorAll(".td-medico");
const imagemEscala = document.querySelector("#imagem-escala");
const lateralForm = document.querySelector("#lateral-form");
let inputs, labels, labelsDefaultColor;

class Medico {
    constructor(nome, apelido, sexo, unidade, especialidade, tipoRegistro, numeroRegistro, seletor, categorias, observacoes) {
        this.nome = nome;
        this.apelido = apelido;
        this.sexo = sexo;
        this.unidade = unidade;
        this.especialidade = especialidade;
        this.tipoRegistro = tipoRegistro;
        this.numeroRegistro = numeroRegistro;
        this.seletor = seletor;
        this.categorias = categorias;
        this.observacoes = observacoes;
    }

    getCategorias() {
        let lista = []
        let categorias = [
            "ecografia", "mamografia",
            "densitometria", "ressonância",
            "laudo ressonância", "consulta nutricional",
            "tomossíntese"];

        for (let index of this.categorias) {
            lista.push(categorias[index])
        }
        return lista.join(", ");
    }
}

const medicos = []

function adicionarMedico(nome, apelido, sexo, unidade, especialidade, tipoRegistro, numeroRegistro, seletor, categorias, observacoes) {
    medicos.push(new Medico(nome, apelido, sexo, unidade, especialidade, tipoRegistro, numeroRegistro, seletor, categorias, observacoes));
}

function exibeObservacoes(medico) {
    observacoesContainer.innerHTML = `<h3>Observações</h3>
    <div class="observacoes" id="observacoes-${medico.seletor}" style="margin:0 auto">
        ${medico.observacoes}
    </div>`
}

// TODO: adicionar função de exibir a imagem de cada médico
function exibeInformacao() {
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
    medico.sexo === "M" ? iconeMedico.src = "../img/medicos/avatares/medico.png" : iconeMedico.src = "../img/medicos/avatares/medica.png";
    unidade.textContent = medico.unidade;
    exibeObservacoes(medico);
    labels.forEach((label) => {
        label.control.checked === true ? label.style.color = "#fff" : label.style.color = labelsDefaultColor;
    });
}

// TODO: trazer informações de médicos via JSON
adicionarMedico(
    nome = "Adriana Dias de Farias Figueiredo",
    apelido = "Adriana Dias",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "ginecologista",
    tipoRegistro = "CRM",
    numeroRegistro = "19607",
    seletor = "dra-adriana-dias",
    categorias = [0, 1],
    observacoes = ``
);

adicionarMedico(
    nome = "Adriana Sousa Freire",
    apelido = "Adriana Freire",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "21125",
    seletor = "dra-adriana-freire",
    categorias = [0],
    observacoes = `
<h4>Utiliza 2 horários:</h4>
<ul>
    <li>Doppler Glândulas Salivares
    <li>Doppler Mamas
    <li>Doppler Axilas
    <li>Doppler Cervical
    <li>Doppler Tireoide
</ul>`
);

adicionarMedico(
    nome = "Alessandra Cerri Bertolino Fonseca",
    apelido = "Alessandra Cerri",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "21585",
    seletor = "dra-alessandra",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Alexander Tavares Daud",
    apelido = "Alexander Daud",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "angiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11981",
    seletor = "dr-alexander",
    categorias = [0],
    observacoes = `
<h4>Atenção para estes exames:</h4>
<p>Ecografia de aorta abdominal e ilíacas (GEAP / AMIL - não cobrem)</p>
<p>Ecografia de artérias renais (GEAP / AMIL - não cobrem)</p>
<p>Ecografia de veia cava inferior e superior (AMIL - não cobre)</p>
<br>
<h4>Preparo específico Dr. Alexander:</h4>
<p>6 horas de jejum (absoluto)</p>
<p>Luftal a cada 6 horas durante 2 dias antes do exame (40 gotas ou 1 comprimido)</p>`
);

adicionarMedico(
    nome = "Alexandra Ferreira Silva",
    apelido = "Alexandra Silva",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11300",
    seletor = "dra-alexandra",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Aline Catunda de Clodoaldo Pinto",
    apelido = "Aline Catunda",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "17972",
    seletor = "dra-aline",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Amanda Assis da Silva Lima",
    apelido = "Amanda Assis",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "21116",
    numeroRegistro = "CRM",
    seletor = "dra-amanda",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Ana Lívia Prado de Meneses Lopes",
    apelido = "Ana Lívia",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "19148",
    seletor = "dra-ana-livia",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Carla Maria da Silva Araújo",
    apelido = "Carla Araújo",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "14935",
    seletor = "dra-carla-maria",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Carla Concolato",
    apelido = "Carla Concolato",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "22066",
    seletor = "dra-carla-concolato",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Henrique Metzger",
    apelido = "Henrique",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "17411",
    seletor = "dr-henrique",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Iris Gardênia Cavalca e Silva",
    apelido = "Iris Gardênia",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "mastologista",
    tipoRegistro = "CRM",
    numeroRegistro = "10842",
    seletor = "dra-iris",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Janice Magalhães Lamas",
    apelido = "Janice Lamas",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "3570",
    seletor = "dra-janice",
    categorias = [6],
    observacoes = ``
);

adicionarMedico(
    nome = "Juliana Catão Grisi",
    apelido = "Juliana Catão",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "mastologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11295",
    seletor = "dra-juliana",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Larissa Ravila Sacch de Oliveira",
    apelido = "Larissa Ravila",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "19687",
    seletor = "dra-larissa",
    categorias = [0],
    observacoes = `
<h4>Exames dermatológicos</h4>
<br>
<p><b>Núdulo, aumento volume, edema, unha e etc</b> (sempre com doppler):</p>
<p>Tempo: <b>30 minutos</b></p>
<p>Valor: <b>R$: 780,00</b></p>
<br>
<p><b>Mapeamento facial</b> (avaliação de preenchedores):</p>
<p>Tempo: <b>60 minutos</b></p>
<p>Valor: <b>R$: 1.200,00</b></p>
<br>
<p><b>Mapeamento corporal</b> (avaliação de preenchedores):</p>
<p>Tempo: <b>60 minutos</b></p>
<p>Valor: <b>R$: 1.200,00</b></p>
<br>
<p><b>Avaliação de complicação pós procedimento</b> (facial ou corporal):</p>
<p>Tempo: <b>60 minutos</b></p>
<p>Valor: <b>R$: 1.200,00</b></p>
<br>
<p><b>Estadiamento de hidradenite supurativa:</b></p>
<ol>
    <li>Segmento: <b>R$: 700,00</b> / 60 minutos
    <li>Segmentos: <b>R$: 1.225,00</b> / 90 minutos
    <li>Segmentos: <b>R$: 1.400,00</b> / 120 minutos
    <li>Segmentos: <b>R$: 1.750,00</b> / 150 minutos
    <li>Segmentos: <b>R$: 2.100,00</b> / 180 minutos
</ol>
`
);

adicionarMedico(
    nome = "Lorena Francisca Moura de Freitas Carvalho",
    apelido = "Lorena Francisca",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "8214",
    seletor = "dra-lorena",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Marcelo Bittencourt Barreiros",
    apelido = "Marcelo Barreiros",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "7203",
    seletor = "dr-marcelo",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Márcia Cristina Dias da Costa",
    apelido = "Márcia Cristina",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "4906",
    seletor = "dra-marcia-cristina",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Marcia Da Rocha Carneiro Barreiros",
    apelido = "Marcia Barreiros",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "7697",
    seletor = "dra-marcia-barreiros",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Márcia Laporte",
    apelido = "Márcia Laporte",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "28342",
    seletor = "dra-marcia-laporte",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Melissa Severo De Brito",
    apelido = "Melissa Severo",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "30978",
    seletor = "dra-melissa",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Mirley Do Prado",
    apelido = "Mirley Do Prado",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "7591",
    seletor = "dra-mirley",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Oliviane Basílio D'Oliveira de Teixeira",
    apelido = "Oliviane Basílio",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "5375",
    seletor = "dra-oliviane",
    categorias = [0],
    observacoes = `
    <h4>Exames diferenciados:</h4>
    <ul>
        <li>US paratireoide
        <li>US região inguinal
        <li>US próstata c/ doppler
        <li>US abdome superior c/ doppler
        <li>US pelvica abdominal c/ doppler
    </ul>
    <br>
    <p>Idade mínima: <b>6 anos</b></p>`
);

adicionarMedico(
    nome = "Osmar Pellegrini Júnior",
    apelido = "Osmar Pellegrini",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "mastologista",
    tipoRegistro = "CRM",
    numeroRegistro = "21768",
    seletor = "dr-osmar",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Renata Cristina Silva Trinta",
    apelido = "Renata Trinta",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11595",
    seletor = "dra-renata-trinta",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Renata Tavazzi Estrela",
    apelido = "Renata Estrela",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "11609",
    seletor = "dra-renata-estrela",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Sérgio Eduardo Costa Sampaio",
    apelido = "Sérgio Sampaio",
    sexo = "M",
    unidade = "lago sul",
    especialidade = "ginecologista",
    tipoRegistro = "CRM",
    numeroRegistro = "4414",
    seletor = "dr-sergio",
    categorias = [0],
    observacoes = `
<h4>Exames diferenciados:</h4>
<ul>
    <li>US gestacional (30 minutos p/ cada feto, particular, consulte tabela de preços)
    <li>Elastografia hepática (20 miutos, particular)
    <li>Elastografia axila (shear wave, 20 minutos, particular)
    <li>Elastografia mama (shear wave, 20 minutos, particular)
    <li>Elastografia tireoide (shear wave, 20 minutos, particular)
</ul>
<br>
<p><b>Valor elastografias: R$: 430,00</b></p>`
);

adicionarMedico(
    nome = "Silvio Braz de Paixão",
    apelido = "Silvio Braz",
    sexo = "M",
    unidade = "asa sul",
    especialidade = "ginecologista",
    tipoRegistro = "CRM",
    numeroRegistro = "10605",
    seletor = "dr-silvio",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Thaís Magalhães Lamas",
    apelido = "Thaís Lamas",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "nutricionista",
    tipoRegistro = "CRN/DF",
    numeroRegistro = "2559",
    seletor = "dra-thais-lamas",
    categorias = [5],
    observacoes = ``
);

adicionarMedico(
    nome = "Thays Vieira De Vasconcelos Sousa",
    apelido = "Thays Vieira",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "23969",
    seletor = "dra-thays-vieira",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Yara Cristina Rocha Tanezini",
    apelido = "Yara Cristina",
    sexo = "F",
    unidade = "asa sul",
    especialidade = "radiologista",
    tipoRegistro = "CRM",
    numeroRegistro = "2920",
    seletor = "dra-yara",
    categorias = [0],
    observacoes = ``
);

// adicionarMedico(
//     nome = "Médico Teste 01",
//     apelido = "Médico Teste 01",
//     sexo = "M",
//     unidade = "asa sul",
//     especialidade = "radiologista",
//     tipoRegistro = "CRM",
//     numeroRegistro = "3080",
//     seletor = "medico-teste",
//     categorias = [0]
// );


function adicionarInputMedico(medico) {
    lateralForm.innerHTML += `
        <div class="input-container">
            <input type="radio" name="input-medico" id="${medico.seletor}" class="input-medico">
            <label for="${medico.seletor}">${medico.apelido}</label>
        </div>`;
}

function adicionarInputs() {
    for (let medico of medicos) {
        adicionarInputMedico(medico);
    }
    labels = document.querySelectorAll(".input-container > label");
    labelsDefaultColor = labels[0].style.color;
    document.querySelector(".input-medico").checked = true;
}

adicionarInputs();
exibeInformacao();
