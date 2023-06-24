// 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del 1 al 7) 
// y muestre en la consola el nombre del día correspondiente (por ejemplo, 1 corresponde a "Lunes", 2 corresponde a "Martes", etc.).

let dia = prompt ('¿Que día es? (1-7)');

switch (dia) {
    case '1':
        alert('Hoy es Lunes');
        break;
    case '2':
        alert('Hoy es Martes');
        break;
    case '3':
        alert('Hoy es Miercoles');
        break;
    case '4':
        alert('Hoy es Jueves');
        break;
    case '5':
        alert('Hoy es Viernes');
        break;
    case '6':
        alert('Hoy es Sabado');
        break;
    case '7':
        alert('Hoy es Domingo');
        break;
    default:
        alert('No es un día de la semana.');
        break;
}