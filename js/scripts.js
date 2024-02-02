const scripts = ["agendamento", "confirmacao", "mamografia-com-tecnica", "resgate", "tomossintese"];
const imgContainer = document.querySelector("#image-container");
const navigation = document.querySelector("#navigation");
const image = document.querySelector("#image-script");
let navItens;


function adicionarNavItem(id, texto) {
    navigation.innerHTML += `
        <a href="#" id="${id}">${texto}</a>`;
}


for(let script of scripts) {
    let texto = script.replaceAll("-", " ");
    texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    adicionarNavItem(script, texto);
    navItens = document.querySelectorAll("a");
    image.src = `../img/scripts/${navItens[0].id}.jpg`
}

navItens.forEach(element => {
    element.addEventListener("click", () => {
        image.src = `../img/scripts/${element.id}.jpg`;
    })    
});
