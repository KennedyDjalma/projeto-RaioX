// seleciona o botao com id "calculateButton" na pag
const button = document.getElementById("calculateButton");

// adiciona um evento de clique ao botao
button.addEventListener("click", function () {
    // pega os valores digitados nos inputs e converte para nº decimal = parseFloat
    const ca = parseFloat(document.getElementById("inputCA").value);
    const e = parseFloat(document.getElementById("inputNumber").value);

    // verifica se os valores do input são validos (não são NaN)
    if (isNaN(ca) || isNaN(e)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return; // interrompe a execucao se houver erro
    }

    // calcula o valor de kv usando a formula
    const kv = (2 * e) + ca;

    // exibe o resultado no campo de entrada com id "inputKv"
    document.getElementById("inputKv").value = kv;
});
