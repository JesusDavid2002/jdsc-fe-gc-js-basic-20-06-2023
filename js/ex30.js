// 30. Crea un programa que solicite al usuario ingresar un número y luego determine si es un número perfecto 
// (la suma de sus divisores propios es igual al número) utilizando un bucle `while`, una condición `if` y una variable acumuladora.

let numero = parseInt(prompt('Ingresa un número: '));
let suma = 0;
let i = 1;

while (i < numero) {
    if( numero % i === 0){
        suma += i; 
    }
    i++;
}

if(suma === numero){  
    console.log(`${numero} es un número perfecto`);
}else{
    console.log(`${numero} no es un número perfecto`);
}

