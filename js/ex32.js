// 32. Escribe un programa que solicite al usuario ingresar un número y luego calcule el factorial
// de ese número utilizando un bucle `for`, una condición `if` y una variable acumuladora.

let numero = prompt('Ingresa un número: ');
let acumulador = 1;

if (numero >= 0) {
    for (let i = 1; i <= numero; i++) {
        acumulador *= i;
    }
}

console.log(acumulador);