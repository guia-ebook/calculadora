function calculatePercentage(value, total) {
    if (total === 0) {
        throw new Error('O valor total não pode ser zero.');
    }
    const percentage = (value / total) * 100;
    return percentage.toFixed(2); // Retorna o resultado com duas casas decimais
}

function calcularApostasParaGanhoIgual(total, old1, old2) {
    // Verifica se old1 e old2 são diferentes de zero para evitar divisão por zero
    if (old1 === 0 || old2 === 0) {
        throw new Error("Os valores de 'old' não podem ser zero.");
    }
    // Calcular a fração do total que deve ser apostada em cada odd
    const fração1 = 1 / old1;
    const fração2 = 1 / old2;
    const somaFrações = fração1 + fração2;

    // Calcular o valor a ser apostado em cada odd
    const aposta1 = (fração1 / somaFrações) * total;
    const aposta2 = (fração2 / somaFrações) * total;

    // Calcular o retorno garantido
    const retorno1 = aposta1 * old1;
    const retorno2 = aposta2 * old2;
    const lucroGarantido = Math.min(retorno1, retorno2) - total;
    return { aposta1, aposta2, lucroGarantido };
}

// Exemplo de uso
const total = 50;              // Valor total a ser apostado
const old1 = 3.62;               // Valor da primeira 'old'
const old2 = 1.70;                 // Valor da segunda 'old'
const resultado = calcularApostasParaGanhoIgual(total, old1, old2);
console.log(`Aposta 1: ${resultado.aposta1.toFixed(2)}`);
console.log(`Aposta 2: ${resultado.aposta2.toFixed(2)}`);
const percentage = calculatePercentage(resultado.lucroGarantido, total);
console.log(`Lucro Garantido: ${resultado.lucroGarantido.toFixed(2)}, %${percentage}`);


