// captura o botão
const button = document.getElementById("calculateButton");

// adiciona evento de clique
button.addEventListener("click", function () {
    const ca = parseFloat(document.getElementById("inputCA").value);
    const e = parseFloat(document.getElementById("inputCm").value);
    const cmm = parseFloat(document.getElementById("inputCMM").value);

    // verifica se os valores sao validos
    if (isNaN(ca) || isNaN(e) || isNaN(cmm)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    // formula: mAs = (2 * E + CA) * CMM
    const mAs = (2 * e + ca) * cmm;

    // mostra o resultado no input readonly
    document.getElementById("inputmAs").value = mAs;
});