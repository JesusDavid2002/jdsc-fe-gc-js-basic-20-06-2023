// 33. Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la consola la palabra invertida 
// utilizando un bucle `while`, una condición `if` y una variable acumuladora.

let palabra = prompt('Ingresa una palabra: ');
let letras = '';
let i = palabra.length - 1;

while (i >=0){
    letras += palabra.charAt(i);
    i--;
}

console.log(letras);