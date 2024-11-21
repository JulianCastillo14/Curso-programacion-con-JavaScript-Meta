/*
Debe codificar un pequeño programa que tome un número y determine si es un número par (como 2, 4, 6, 8, 10).

Para lograr esta tarea, debe declarar seis variables de la siguiente manera:

A la primera variable, denominada num1,  se le debe asignar un valor numérico de 2.

A la segunda variable, denominada num2, se le debe asignar un valor numérico de 5.

A la tercera variable, denominada test1, se le debe asignar el cálculo de num1 % 2. Nota: ejecutar este código devolverá un número.

A la cuarta variable, denominada test2, se le debe asignar el cálculo de num2 % 2. Nota: ejecutar este código también devolverá un número.

A la quinta variable, denominada result1, se le debe asignar el resultado de comparar si el número almacenado en la variable test1 no es igual a 0; es decir, esto: test1 == 0.

A la sexta variable, denominada result2, se le debe asignar el resultado de la comparación si el número almacenado en la variable test2 no es igual a 0; en otras palabras, test2 == 0.

Ejecute el registro de la consola dos veces después de configurar las variables:

El primer registro de la consola debe tener el siguiente código entre paréntesis: "Is", num1, "an even number?", result1

El segundo registro de la consola debe tener el siguiente código entre paréntesis: "Is", num2, "an even number?", result2

Nota: El resultado de la consola debe ser el siguiente:

Is 2 an even number? true

Is 5 an even number? false
*/

var num1 = 2;
var num2 = 5;
var test1;
var test2;
test1 = test2 = 0;
var result1;
var result2;

test1 = num1 % 2;
test2 = num2 % 2;

result1 = test1 == 0;
result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);