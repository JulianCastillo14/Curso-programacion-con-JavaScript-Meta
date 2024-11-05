/*
Ejercicio 1

En este ejercicio, creará el código para un bucle forutilizando la variable de contador denominada i a partir de 1.

Para hacer que el contador se incremente en 1 en cada bucle, usará i++.

La condición de salida para el bucle for es i<=10.

Dentro del bucle, escriba una declaración if-else, que verificará las siguientes condiciones:

Primero, comprobará si el valor de i es 1. Si es así, su código registrará en la consola la cadena “Gold medal”.

A continuación, comprobaré si el valor de i es 2. Si es así, su código registrará en la consola la cadena “Silver medal”.

Luego, su código verificará si el valor de i es 3. Si es así, registrará en la consola la cadena “Bronze medal”.

Para todos los valores restantes de i, su código registrará en la consola solo el valor de i.

Nota: El registro de la consola esperado de todo el código debería ser el siguiente. 
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/

for (var i = 1; i<=10; i++) {
    if (i == 1) {
        console.log('Gold medal');
    } else if (i == 2) {
        console.log('Silver medal');
    } else if (i == 3) {
        console.log('Bronze medal');
    } else {
        console.log(i);
    }
}