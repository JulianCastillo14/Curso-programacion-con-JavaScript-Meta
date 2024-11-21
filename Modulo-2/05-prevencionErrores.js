/*
Instrucciones
Tarea 1: Codificar una declaración de función
Debe codificar una declaración de función denominada addTwoNums, que acepte los números a y b y que registre en la consola a + b.

Tarea 2: Invoque la función addTwoNums con un número y una cadena.
Debe invocar addTwoNums usando los siguientes argumentos: 5 y "5".

Tarea 3: Actualice la función addTwoNums con un bloque try...catch
Agregue los bloques try y catch dentro de la estructura de la definición de la función. Por ahora, solo asegúrese de que el registro de la consola de a + b esté dentro del bloque de prueba. Además, el bloque catch debe detectar un error llamado err y, dentro de la estructura del bloque catch, debe registrar en la consola el valor de err.

Tarea 4: Si los argumentos pasados no son números, se genera un error
Si alguno de los argumentos pasados a addTwoNums no son números, arrojará un error.

Específicamente, codifique un condicional con la siguiente lógica:

si typeof del parámetro a no es igual a 'number', lanza un nuevo ReferenceError. Dentro de ReferenceError, pase un mensaje de error personalizado de 'the first argument is not a number'.

de lo contrario, si el typeof del parámetro b no es igual a 'number', arroja un nuevo ReferenceError. En ReferenceError, pase un mensaje de error personalizado de 'the second argument is not a number'.

de lo contrario, registre en la consola a + b  

Una vez que haya completado esta tarea, todo el código dentro del bloque try estará dentro de estas declaraciones condicionales.

Tarea 5: Actualizar el bloque catch
Dentro del bloque catch, actualice el código de console.log(err) por console.log("Error!", err).

Tarea 6: Invocar la función addTwoNums
Invoque la función addTwoNums usando 5 y "5" como argumentos.

Tarea 7: Agregue otro registro de consola bajo la invocación de la función addTwoNums
Agregue otra línea de código que registre en la consola la cadena "It still works".
*/

function addTwoNums(a,b){
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }  
    }catch (error) {
        console.log("Error!",error);
    }
}

addTwoNums(5, "5");
console.log("It still works");



