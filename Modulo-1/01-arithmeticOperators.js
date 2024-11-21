/*
    Arithmetic operators
    
    + addition
    - substraction
    * multiplication
    / division
*/

console.log("5 + 4 =", 5 + 4);
console.log("5 - 4 =", 5 - 4);
console.log("5 * 4 =", 5 * 4);
console.log("20 / 4 =", 20 / 4);

/*
    comparison operators

    > greater than 
    < less than
    == equals
    != different of 
*/

console.log("5 > 2 ->", 5 > 2);
console.log("5 < 2 ->", 5 < 2);
console.log("5 == 2 ->", 5 == 2);
console.log("5 != 2 ->",  5 != 2);

//caso a comprobar
console.log("1 != 1 ->", 1 != 1);
console.log("1 != '1' ->", 1 === '1');
console.log("1 !== '1' ->", 1 !== '1');

//Asignación de suma 
var a;
a = 5;
a += 5;
console.log(a);

//Asignación de concatenación
var gretting;
gretting = 'Hola, ';
gretting += 'Julian';
console.log(gretting);


/*
Digamos que tiene la tarea de crear un código que verifique si la variable currentTime está entre las 9 a. m. y las 5 p. m.. El código debe ser verdadero en console.log si currentTime > 9 y si currentTime < 17.
*/
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

/*
 Debe escribir un programa en JavaScript que devuelva true si el valor de la variable currentTime no está entre 9 y 17. Dicho de otra manera, su código necesita console.log true si el valor de la variable currentTime es menor que 9 o mayor que 17.
*/
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);


//Combinar cadenas y números usando el operador +
console.log(365 + " days");
console.log(12,"months");

//Para tener en cuenta
console.log(1 + "2"); //-> 12

//asociatividad de izquierda a derecha
console.log(5 * 3 + 5);

//asociatividad de derecha a izquierda
console.log( 5 > 4 > 3);
