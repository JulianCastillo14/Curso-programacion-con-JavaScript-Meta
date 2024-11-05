/*
Está programando un juego de RPG, donde cada personaje tiene ciertos niveles de habilidad en función del valor guardado en su puntuación.

Cree una variable llamada score y configúrela en 8

Use console.log() que incluye la cadena "Mid-level skills:" y compare la variable score con más de 0 y menos de 10 usando el operador &&

El resultado esperado en la consola debería ser: "Mid-level skills: true".
*/

var score = 8;
console.log("Mid-level skills:", (score > 0 && score < 10));