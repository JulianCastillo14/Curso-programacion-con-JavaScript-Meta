/*
Tareas para completar
Cree un nuevo literal de matriz vacío y asígnelo a la variable ropa.

Agregue 5 de sus prendas favoritas como cadenas usando el método push().

Retire la quinta prenda de la matriz usando el método pop().

Agregue una nueva prenda usando el método push() .

Use console.log para mostrar el tercer elemento de la matriz de ropa en la consola.

Cree un nuevo literal de objeto vacío y asígnelo a la variable favCar.

Usando la notación de puntos, asigne una propiedad de color al objeto favCar y asígnele un valor de cadena con el color de su elección.

Usando la notación de puntos, asigne una propiedad convertible al objeto y favCar y asígnele un valor booleano de su elección.

Utilice la consola para registrar todo el objeto favCar.
*/

var ropa = [];
ropa.push('Chaqueta');
ropa.push('Buso');
ropa.push('Pantaloneta');
ropa.push('Camisa');
ropa.push('Medias');
ropa.pop();
ropa.push('Sudadera');

console.log(ropa);

var favCar = {};
favCar.color = "Gris";
favCar.convertible = true;

console.log(favCar);