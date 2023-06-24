// 28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
// contador de divisores.

let numero = prompt('Ingresa un número:');
let contadorPrimos = 0;


for (let i = 2; i < numero; i++) {
    if(numero % i === 0){
        contadorPrimos++;
    }   
}

if(contadorPrimos === 0){  
    console.log(`${numero} es primo`);
}else{
    console.log(`${numero} no es primo`);
}

