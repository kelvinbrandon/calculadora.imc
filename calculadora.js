document.getElementById("imcForm").addEventListener("submit", function(e) {
    e.preventDefault(); // impede o formulário de recarregar a página

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (peso > 0 && altura > 0) {
        let imc = peso / (altura * altura);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 24.9) classificacao = "Peso normal";
        else if (imc < 29.9) classificacao = "Sobrepeso";
        else classificacao = "Obesidade";

        document.getElementById("resultado").innerText =
            `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
    } else {
        document.getElementById("resultado").innerText = "Preencha os valores corretamente.";
    }
});
