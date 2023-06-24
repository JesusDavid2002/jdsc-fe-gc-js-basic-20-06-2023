// 29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
// en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
// condición `if` y una variable contador.

let palabra = prompt('Ingresa una palabra: ');
let vocales = 'aeiou';
let cantidadVocales = 0;

for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales ++;
        }
}

console.log(cantidadVocales);       