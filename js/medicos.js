let observacoesMedicoContainer = document.querySelector("#observacoes-container");
const medicosNaTabela = document.querySelectorAll(".td-medico");
const imagemEscala = document.querySelector("#imagem-escala");
const lateralForm = document.querySelector("#lateral-form");
let inputs, labels, labelsDefaultColor;

class Medico {
    constructor(nome, apelido, sexo, unidadeAtendimento, especialidadeMedico, tipoRegistroMedico, numeroRegistroMedico, seletor, categorias, observacoes) {
        this.nome = nome;
        this.apelido = apelido;
        this.sexo = sexo;
        this.unidadeAtendimento = unidadeAtendimento;
        this.especialidadeMedico = especialidadeMedico;
        this.tipoRegistroMedico = tipoRegistroMedico;
        this.numeroRegistroMedico = numeroRegistroMedico;
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

function adicionarMedico(nome, apelido, sexo, unidadeAtendimento, especialidadeMedico, tipoRegistroMedico, numeroRegistroMedico, seletor, categorias, observacoes) {
    medicos.push(
        new Medico(
            nome,
            apelido,
            sexo,
            unidadeAtendimento,
            especialidadeMedico,
            tipoRegistroMedico,
            numeroRegistroMedico,
            seletor,
            categorias,
            observacoes
        ));
}

function exibeObservacoesMedico({ seletor, observacoes }) {
    observacoesMedicoContainer.innerHTML = `<h3>Observações</h3>
    <div class="observacoes" id="observacoes-${seletor}" style="margin:0 auto">
    ${observacoes}
    </div>`;
    let campoObservacoes = document.querySelector(".observacoes");
    if (observacoes == "") {
        campoObservacoes.classList.add("oculto");
    }
}

// TODO: otimizar funções
function exibeInformacao() {
    const selectedRadio = document.querySelector("input:checked");
    const campoNomeMedico = document.getElementById("nome-medico");
    const especialidadeMedico = document.getElementById("especialidade");
    const unidadeAtendimento = document.getElementById("unidade-atendimento");
    const medico = medicos.find((medico) => medico.seletor === selectedRadio.id);
    const iconeMedico = document.querySelector("#icone-medico");
    const tipoRegistroMedico = document.querySelector("#tipo-registro");
    const numeroRegistroMedico = document.querySelector("#numero-registro");
    const categorias = document.querySelector("#categoria");
    campoNomeMedico.innerText = medico.nome;
    tipoRegistroMedico.innerText = medico.tipoRegistroMedico;
    numeroRegistroMedico.innerText = medico.numeroRegistroMedico;
    especialidadeMedico.innerText = medico.especialidadeMedico;
    categorias.innerText = medico.getCategorias();
    medico.sexo === "M" ? iconeMedico.src = "../img/medicos/avatares/medico.png" : iconeMedico.src = "../img/medicos/avatares/medica.png";
    unidadeAtendimento.innerText = medico.unidadeAtendimento;
    exibeObservacoesMedico(medico);
    labels.forEach((label) => {
        let styleChanges = "color: #fff; margin-left: 10%;"
        if (label.control.checked) {
            label.style = styleChanges;
            label.parentNode.style = "background-color: var(--cor-destaque)";
        } else {
            label.style -= styleChanges;
            label.parentNode.style -= "background-color: var(--cor-destaque)";
        }
    });
}

// TODO: trazer informações de médicos via JSON
adicionarMedico(
    nome = "Adriana Dias de Farias Figueiredo",
    apelido = "Adriana Dias",
    sexo = "F",
    unidadeAtendimento = "asa sul, lago sul",
    especialidadeMedico = "ginecologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "19607",
    seletor = "dra-adriana-dias",
    categorias = [0, 1],
    observacoes = ``
);

adicionarMedico(
    nome = "Adriana Sousa Freire",
    apelido = "Adriana Freire",
    sexo = "F",
    unidadeAtendimento = "asa sul, lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "21125",
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
    nome = "Alexander Tavares Daud",
    apelido = "Alexander Daud",
    sexo = "M",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "angiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "11981",
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
    unidadeAtendimento = "asa sul, lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "11300",
    seletor = "dra-alexandra",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Aline Catunda de Clodoaldo Pinto",
    apelido = "Aline Catunda",
    sexo = "F",
    unidadeAtendimento = "asa sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "17972",
    seletor = "dra-aline",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Amanda Assis da Silva Lima",
    apelido = "Amanda Assis",
    sexo = "F",
    unidadeAtendimento = "asa sul, lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "21116",
    seletor = "dra-amanda",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Ana Lívia Prado de Meneses Lopes",
    apelido = "Ana Lívia",
    sexo = "F",
    unidadeAtendimento = "asa sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "19148",
    seletor = "dra-ana-livia",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Carla Maria da Silva Araújo",
    apelido = "Carla Araújo",
    sexo = "F",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "14935",
    seletor = "dra-carla-maria",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Carla Concolato",
    apelido = "Carla Concolato",
    sexo = "F",
    unidadeAtendimento = "asa sul, lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "22066",
    seletor = "dra-carla-concolato",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Henrique Metzger",
    apelido = "Henrique",
    sexo = "M",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "17411",
    seletor = "dr-henrique",
    categorias = [4],
    observacoes = ``
);

adicionarMedico(
    nome = "Iris Gardênia Cavalca e Silva",
    apelido = "Iris Gardênia",
    sexo = "F",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "mastologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "10842",
    seletor = "dra-iris",
    categorias = [1],
    observacoes = ``
);

adicionarMedico(
    nome = "Janice Magalhães Lamas",
    apelido = "Janice Lamas",
    sexo = "F",
    unidadeAtendimento = "asa sul, lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "3570",
    seletor = "dra-janice",
    categorias = [6],
    observacoes = ``
);

adicionarMedico(
    nome = "Juliana Catão Grisi",
    apelido = "Juliana Catão",
    sexo = "F",
    unidadeAtendimento = "asa sul",
    especialidadeMedico = "mastologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "11295",
    seletor = "dra-juliana",
    categorias = [1],
    observacoes = ``
);

adicionarMedico(
    nome = "Larissa Ravila Sacch de Oliveira",
    apelido = "Larissa Ravila",
    sexo = "F",
    unidadeAtendimento = "asa sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "19687",
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
    <li>1 Segmento: <b>R$: 700,00</b> / 60 minutos
    <li>2 Segmentos: <b>R$: 1.225,00</b> / 90 minutos
    <li>3 Segmentos: <b>R$: 1.400,00</b> / 120 minutos
    <li>4 Segmentos: <b>R$: 1.750,00</b> / 150 minutos
    <li>5 Segmentos: <b>R$: 2.100,00</b> / 180 minutos
</ol>
`
);

adicionarMedico(
    nome = "Marcelo Bittencourt Barreiros",
    apelido = "Marcelo Barreiros",
    sexo = "M",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "7203",
    seletor = "dr-marcelo",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Márcia Cristina Dias da Costa",
    apelido = "Márcia Cristina",
    sexo = "F",
    unidadeAtendimento = "asa sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "4906",
    seletor = "dra-marcia-cristina",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Marcia Da Rocha Carneiro Barreiros",
    apelido = "Marcia Barreiros",
    sexo = "F",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "7697",
    seletor = "dra-marcia-barreiros",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Márcia Laporte",
    apelido = "Márcia Laporte",
    sexo = "F",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "28342",
    seletor = "dra-marcia-laporte",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Melissa Severo De Brito",
    apelido = "Melissa Severo",
    sexo = "F",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "30978",
    seletor = "dra-melissa",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Mirley Do Prado",
    apelido = "Mirley Do Prado",
    sexo = "F",
    unidadeAtendimento = "asa sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "7591",
    seletor = "dra-mirley",
    categorias = [0, 1],
    observacoes = ``
);

adicionarMedico(
    nome = "Oliviane Basílio D'Oliveira de Teixeira",
    apelido = "Oliviane Basílio",
    sexo = "F",
    unidadeAtendimento = "asa sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "5375",
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
    <p><b>Exames simples com doppler</b> (se houver indicação), exemplos: abdome total, abdome superior, aparelho urinário, tireoide, mama, partes moles.</p>
    <br>
    <p><b>Atende todas as idades</b>.</p>`
);

adicionarMedico(
    nome = "Osmar Pellegrini Júnior",
    apelido = "Osmar Pellegrini",
    sexo = "M",
    unidadeAtendimento = "asa sul, lago sul",
    especialidadeMedico = "mastologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "21768",
    seletor = "dr-osmar",
    categorias = [0],
    observacoes = `
    <p>Não realiza: <b>US ABD TOTAL</b></p>`
);

adicionarMedico(
    nome = "Renata Cristina Silva Trinta",
    apelido = "Renata Trinta",
    sexo = "F",
    unidadeAtendimento = "asa sul, lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "11595",
    seletor = "dra-renata-trinta",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Renata Tavazzi Estrela",
    apelido = "Renata Estrela",
    sexo = "F",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "11609",
    seletor = "dra-renata-estrela",
    categorias = [0, 1],
    observacoes = ``
);

adicionarMedico(
    nome = "Silvio Braz de Paixão",
    apelido = "Silvio Braz",
    sexo = "M",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "ginecologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "10605",
    seletor = "dr-silvio",
    categorias = [0, 1],
    observacoes = ``
);

adicionarMedico(
    nome = "Thaís Magalhães Lamas",
    apelido = "Thaís Lamas",
    sexo = "F",
    unidadeAtendimento = "asa sul",
    especialidadeMedico = "nutricionista",
    tipoRegistroMedico = "CRN/DF",
    numeroRegistroMedico = "2559",
    seletor = "dra-thais-lamas",
    categorias = [5],
    observacoes = `
<h4 id="titulo-nutricao">Convênios aceitos</h4>
<ul id="lista-nutricao">
    <li class="convenio-nutricao">Amil One Health
    <li class="convenio-nutricao">CAIXA
    <li class="convenio-nutricao">CASEMBRAPA
    <li class="convenio-nutricao">FUSEX
    <li class="convenio-nutricao">MPDFT
    <li class="convenio-nutricao">MPF
    <li class="convenio-nutricao">MPM
    <li class="convenio-nutricao">MPT
    <li class="convenio-nutricao">POLÍCIA FEDERAL
    <li class="convenio-nutricao">SIS SENADO
    <li class="convenio-nutricao">STF
    <li class="convenio-nutricao">STJ
    <li class="convenio-nutricao">STM
    <li class="convenio-nutricao">TJDFT
    <li class="convenio-nutricao">TRE
    <li class="convenio-nutricao">TRF
    <li class="convenio-nutricao">TRT
</ul>`
);

adicionarMedico(
    nome = "Thays Vieira De Vasconcelos Sousa",
    apelido = "Thays Vieira",
    sexo = "F",
    unidadeAtendimento = "asa sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "23969",
    seletor = "dra-thays-vieira",
    categorias = [0],
    observacoes = ``
);

adicionarMedico(
    nome = "Yara Cristina Rocha Tanezini",
    apelido = "Yara Cristina",
    sexo = "F",
    unidadeAtendimento = "lago sul",
    especialidadeMedico = "radiologista",
    tipoRegistroMedico = "CRM",
    numeroRegistroMedico = "2920",
    seletor = "dra-yara",
    categorias = [1],
    observacoes = ``
);

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
