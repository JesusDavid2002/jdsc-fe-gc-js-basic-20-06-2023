// 14. Crea un programa que solicite al usuario ingresar un número del 1 al 12 y muestre en la consola el nombre del 
// mes correspondiente (por ejemplo, 1 corresponde a "Enero", 2 corresponde a "Febrero", etc.).

let mes = prompt('Ingresa un número del 1 al 12: ');

switch (mes) {
    case '1':
        console.log('Es Enero');
        break;
    case '2':
        console.log('Es Febrero');
        break;
    case '3':
        console.log('Es Marzo');
        break;
    case '4':
        console.log('Es Abril');
        break;
    case '5':
        console.log('Es Mayo');
        break;
    case '6':
        console.log('Es Junio');
        break;
    case '7':
        console.log('Es Julio');
        break;
    case '8':
        console.log('Es Agosto');
        break;
    case '9':
        console.log('Es Septiembre');
        break;
    case '10':
        console.log('Es Octubre');
        break;
    case '11':
        console.log('Es Noviembre');
        break;
    case '12':
        console.log('Es Diciembre');
        break;

    default:
        break;
}