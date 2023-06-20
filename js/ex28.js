// 28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
// contador de divisores.

let numero = prompt('Ingresa un número:');

for (let i = 0; i <= numero; i++) {
    if(numero % i == 0){
        console.log(i);
    }  
}
