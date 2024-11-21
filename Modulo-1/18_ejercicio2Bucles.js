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

Ejercicio 2. Use el código completo de la tarea anterior, pero convierta los condicionales en una declaración switch.
Cuando codifica la solución, el resultado en la consola debe permanecer exactamente igual que en la pregunta anterior.

Nota: Necesitará tres casos separados para las tres medallas y un caso predeterminado para todos los demás valores de la variable i.
*/

for (var i = 1; i<=10; i++) {
    switch (i) {
        case 1:
            console.log('Gold medal');
            break;
        case 2:
            console.log('Silver medal');
            break;
        case 3:
            console.log('Bronze medal');
            break;
        default:
            console.log(i);
    }
}