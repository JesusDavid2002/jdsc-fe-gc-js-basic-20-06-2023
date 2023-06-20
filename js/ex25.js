// 25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada
// palabra de la frase en una línea diferente utilizando un bucle `for...of`.

let frase = prompt('Ingresa una frase: ');
let palabra = frase.split(/\s+/);

for (let i of palabra) {
    console.log(i);
}
