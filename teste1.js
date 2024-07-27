function calculatePercentage(value, total) {
    if (total === 0) {
        throw new Error('O valor total não pode ser zero.');
    }
    const percentage = (value / total) * 100;
    return percentage.toFixed(2);
}

function calcularApostasParaGanhoIgual(total, old1, old2, old3) {
    if (old1 === 0 || old2 === 0 || old3 === 0) {
        throw new Error("Os valores de 'old' não podem ser zero.");
    }

    const fração1 = 1 / old1;
    const fração2 = 1 / old2;
    const fração3 = 1 / old3;
    const somaFrações = fração1 + fração2 + fração3;

    const aposta1 = (fração1 / somaFrações) * total;
    const aposta2 = (fração2 / somaFrações) * total;
    const aposta3 = (fração3 / somaFrações) * total;

    const retorno1 = aposta1 * old1;
    const retorno2 = aposta2 * old2;
    const retorno3 = aposta3 * old3;
    const lucroGarantido = Math.min(retorno1, retorno2, retorno3) - total;
    
    return { aposta1, aposta2, aposta3, lucroGarantido };
}

const total = 100;      
const old1 = 2.62;
const old2 = 2.70;
const old3 = 5;

const resultado = calcularApostasParaGanhoIgual(total, old1, old2, old3);
console.log(`Aposta 1: ${resultado.aposta1.toFixed(2)}`);
console.log(`Aposta 2: ${resultado.aposta2.toFixed(2)}`);
console.log(`Aposta 3: ${resultado.aposta3.toFixed(2)}`);

const percentage = calculatePercentage(resultado.lucroGarantido, total);
console.log(`Lucro Garantido: ${resultado.lucroGarantido.toFixed(2)}, %${percentage}`);
