

export function calculadora(total, old1, old2) {

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