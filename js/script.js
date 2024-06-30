document.getElementById("formu").addEventListener("submit", form)

const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
var msg = document.getElementById("msg");
var btCalculo = document.getElementById("calcular");
var formulario = document.getElementById("formu");

function form(event) {
    var imc = 0;
    event.preventDefault();

    if (peso.value <= 0 || altura.value <= 0) {
        msg.innerHTML = "Preencha todos os campos corretamente";
        msg.style.color = "red";
        peso.style.border = "3px solid red";
        altura.style.border = "3px solid red";
    } else {
        imc = peso.value / (altura.value * altura.value);
        msg.innerHTML = "Seu IMC é: " + imc.toFixed(2);
        msg.style.color = "black";
        peso.style.border = "none";
        altura.style.border = "none";
        peso.disabled = true;
        altura.disabled = true;
        peso.style.cursor = "not-allowed";
        altura.style.cursor = "not-allowed";
        btCalculo.style.cursor = "not-allowed";
        btCalculo.disabled = true;

        fetch('http://localhost:3000/salvar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ peso: peso.value, altura: altura.value })
        }).then(response => {
            if (response.ok) {
                console.log('Dados inseridos com sucesso');
            } else {
                console.error('Erro ao inserir dados');
            }
        });

    }

}

function histo() {
    window.location.href = "historico.html";
}

function volta() {
    window.location.href = "index.html";
}

function limpa() {
    peso.disabled = false;
    altura.disabled = false;
    btCalculo.disabled = false;
    peso.style.border = "1px solid black";
    altura.style.border = "1px solid black";
    peso.style.cursor = "pointer";
    altura.style.cursor = "pointer";
    btCalculo.style.cursor = "pointer";
    msg.innerHTML = "";
    formulario.reset();
}