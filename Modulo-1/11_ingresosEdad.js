/*
Este programa te permite determinar su fuente de ingresos en función de su edad
*/

var edad = 22;

if (edad >= 65) {
    console.log('Usted obtiene sus ingresos de su pensión');
} else if (edad < 65 && edad >= 18) {
    console.log('Cada mes recibe un salario');
} else if (edad < 18) {
    console.log('Obtiene una asignación');
} else {
    console.log('El valor de la variable edad no es numérico');
}