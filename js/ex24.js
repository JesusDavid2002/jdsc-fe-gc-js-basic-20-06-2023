// 24. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los dígitos del número utilizando un bucle `while`.

let numero = prompt('Ingresa un número: ');

let i = 0;

while (numero > 0) {
    i += numero % 10;
    numero = Math.floor(numero/10)
    
}
console.log(i);