/*
¿Cómo refactorizaría entonces la función dada a continuación teniendo en cuenta la programación defensiva?

Para este ejercicio, asegurémonos de que los dos argumentos que se pasan cumplan con los siguientes criterios:

La longitud del parámetro word no puede ser inferior a 2.

La longitud del parámetro match debe ser 1.

El tipo de los parámetros word y match deben ser string.

Utilizará el siguiente código para completar la tarea:

function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

Estas son las tareas que deben realizarse:

Justo encima del bucle for en la definición de la función letterFinder, declare una variable llamada condition1 y asígnele el siguiente código: typeof(word) == 'string' && word.length >= 2.

Declare una variable llamada condition2 en la línea siguiente y asígnele una verificación que asegure que el tipo de match sea una cadena Y que la longitud de la variable match sea igual a 1.

Escriba una declaración if en la siguiente línea que verifique que condition1 sea verdadera y que condition2 sea verdadera

Mueva el resto de la estructura de la función a la declaración if que escribió en el paso anterior.

Codifique un bloque "else" después de la condición "if" y registre en la consola lo siguiente: "Please pass correct arguments to the function.".

Como prueba fallida, ejecute la función letterFinder y pásela con dos números cualquiera como argumentos.

Como prueba de aprobación, ejecute la función letterFinder y pásela con los argumentos correctos, como: letterFinder("cat", "c").
*/

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log('Please pass correct arguments to the function.')
    }
}

letterFinder(2,2);
letterFinder('cat', 'c')

