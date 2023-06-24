// 27. Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de
// todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una
// condición `if`.

let numero = prompt('Ingresa un número: ');

let suma = 0;
let i = 0;

while (i <= numero) {
    if(i % 2 != 0){
        suma += i;
    }    
    i++ 
}
console.log(`La suma de todos los impares hasta ${numero} es: ${suma}`);