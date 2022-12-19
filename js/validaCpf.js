export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse CPF não é válido')
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf [9]
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf [10]
}



/*

Primeiro Verificador

De posse dos 9 algarismos do CPF, faça as seguintes operações:

multiplique o primeiro algarismo por 10
multiplique o segundo algarismo por 9
multiplique o terceiro algarismo por 8
multiplique o quarto algarismo por 7
multiplique o quinto algarismo por 6
multiplique o sexto algarismo por 5
multiplique o sétimo algarismo por 4
multiplique o oitavo algarismo por 3
multiplique o nono algarismo por 2

Some todos os resultados e divida o total por 11.
Subtraia o resto encontrado de 11, ou seja 11 - RESTO.
Se o resultado for maior que 9, o primeiro dígito verificador é 0 (zero).
Caso contrário, o primeiro dígito verificador é o resultado da subtração.

*/

//export default -  quando chama esse arquivo essa função que será retornada