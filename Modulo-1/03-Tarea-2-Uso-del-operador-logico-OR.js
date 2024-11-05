/*
Imagine que está programando un videojuego. Actualmente, está a punto de codificar algunos fragmentos relacionados con la condición de finalización del juego.

Debe codificar una nueva variable llamada timeRemaining y establecerla en 0. También debe codificar una nueva variable denominada energy y establecerla en 10.

Luego, debe escribir un fragmento de código que podría usarse para determinar si el juego ha terminado, en función de si el valor de la variable timeRemaining es 0 o el valor de la variable energy es 0.

Complete la tarea siguiendo los siguientes pasos:

Declare la variable timeRemaining y asígnele el valor 0.

Declare la variable energy y asígnele el valor 10.

La consola registra los siguientes parámetros: "Game over: " y timeRemaining == 0 || energy == 0

Tenga en cuenta que el resultado esperado en la consola debe ser: "Game over: true".
*/

var timeRemaining = 0;
var energy = 0;
console.log("Game over: " + (timeRemaining == 0 || energy == 0));