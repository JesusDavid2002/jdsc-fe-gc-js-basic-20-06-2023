// 22. Escribe un programa que solicite al usuario ingresar una palabra y muestre en la consola
// cada letra de la palabra en una línea diferente utilizando un bucle `for`.

let palabra = prompt('Ingrese una palabra: ');

for (let i= 0; i < palabra.length; i++) {
    const letra = palabra[i]
    console.log(letra);
    
}