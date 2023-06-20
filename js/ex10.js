// 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del 1 al 7) 
// y muestre en la consola el nombre del día correspondiente (por ejemplo, 1 corresponde a "Lunes", 2 corresponde a "Martes", etc.).

let dia = prompt ('¿Que día es?');

switch (dia) {
    case 'lunes':
        alert('Hoy es lunes');
        break;
    case 'martes':
        alert('Hoy es martes');
        break;
    case 'miercoles':
        alert('Hoy es miercoles');
        break;
    case 'jueves':
        alert('Hoy es jueves');
        break;
    case 'viernes':
        alert('Hoy es viernes');
        break;
    case 'sabado':
        alert('Hoy es sabado');
        break;
    case 'domingo':
        alert('Hoy es domingo');
        break;
    default:
        break;
}