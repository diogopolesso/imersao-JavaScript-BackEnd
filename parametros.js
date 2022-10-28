// Parametros de Função

// function soma(numero1, numero2){
//     return numero1 + numero2;
// }

// console.log(soma(2, 2));
// console.log(soma(40, 30));
// console.log(soma(50, 100));

// Parâmetro x Argumento:

// Podemos trabalhar eles como se fossem a mesma coisa,
// é o mesmo nome para você colocar, passar um valor para dentro de uma função.
// Podemos usar eles intercambiáveis.
// Você pode usar um ou outro, eles são a mesma coisa.

// function nomeIdade(nome, idade){
//     return `meu nome é ${nome} e minha idade é ${idade}`;
// }

// console.log (nomeIdade("Diogo", 37))

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(5, 10), soma(4, 8)))