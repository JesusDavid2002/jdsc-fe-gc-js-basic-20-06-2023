// 31. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la consola todos los 
// números primos desde 1 hasta ese número utilizando un bucle `for`, una condición `if` y una función auxiliar para verificar si un número es primo

let numero = prompt('Ingresa un número:');
let contadorPrimos = 0;

for (let i = 2; i < numero; i++) {
    if(numero % i === 0){
        console.log(`Los número primos desde ${numero} es: ${i}`)
        contadorPrimos++;
    }   
}
        
if(contadorPrimos === 0){  
    console.log(`${numero} es primo`);
}else{
    console.log(`${numero} no es primo`);
}


