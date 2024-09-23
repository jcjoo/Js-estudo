var concatenatedNumber = ""; // Armazena os números digitados
var operador = null; // Armazena o operador atual
var valorAnterior = null; // Armazena o valor antes da operação

// Função para adicionar números
function addNum(num) {
    concatenatedNumber += num; // Concatena o número
    document.getElementById("resultado").innerHTML = concatenatedNumber; // Exibe o número na tela
}

// Função para definir o operador de soma
function somar() {
    if (concatenatedNumber !== "") {
        valorAnterior = parseFloat(concatenatedNumber); // Armazena o valor atual
        operador = "+"; // Define o operador como soma
        concatenatedNumber = ""; // Limpa o número concatenado para receber o próximo
    }
}

// Função para definir o operador de subtração
function subtrair() {
    if (concatenatedNumber !== "") {
        valorAnterior = parseFloat(concatenatedNumber); // Armazena o valor atual
        operador = "-"; // Define o operador como subtração
        concatenatedNumber = ""; // Limpa o número concatenado
    }
}

// Função para definir o operador de multiplicação
function mult() {
    if (concatenatedNumber !== "") {
        valorAnterior = parseFloat(concatenatedNumber); // Armazena o valor atual
        operador = "*"; // Define o operador como multiplicação
        concatenatedNumber = ""; // Limpa o número concatenado
    }
}

// Função para definir o operador de divisão
function divi() {
    if (concatenatedNumber !== "") {
        valorAnterior = parseFloat(concatenatedNumber); // Armazena o valor atual
        operador = "/"; // Define o operador como divisão
        concatenatedNumber = ""; // Limpa o número concatenado
    }
}

// Função para realizar o cálculo
function enter() {
    if (concatenatedNumber !== "" && operador !== null) {
        var valorAtual = parseFloat(concatenatedNumber); // Converte o número atual para float
        var resultado;

        // Realiza a operação com base no operador
        if (operador === "+") {
            resultado = valorAnterior + valorAtual;
        } else if (operador === "-") {
            resultado = valorAnterior - valorAtual;
        } else if (operador === "*") {
            resultado = valorAnterior * valorAtual;
        } else if (operador === "/") {
            resultado = valorAnterior / valorAtual;
        }

        document.getElementById("resultado").innerHTML = resultado; // Exibe o resultado
        concatenatedNumber = ""; // Reseta a variável para um novo cálculo
        valorAnterior = null;
        operador = null;
    }
}
