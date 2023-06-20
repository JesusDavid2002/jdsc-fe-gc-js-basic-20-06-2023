// 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor de ellos.

let numero1 = prompt('Dame un número: ');
let numero2 = prompt('Dame otro número: ');
let numero3 = prompt('Dame un último número: ');

if (numero1 > numero2){
    if (numero1 > numero3){
        alert('El número más grande es el: ' + numero1);
    }
}else if (numero2 > numero1){
    if (numero2 > numero3){
        alert('El número más grande es el: ' + numero2);
    }
}else {
    alert('El número más grande es el: ' + numero3);
    
}