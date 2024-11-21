/**
 * Descripción
El objetivo de este ejercicio es acceder al contenido de un elemento, específicamente usar un clic de botón para reemplazar el texto.

Tarea 1: Sitio web example.com
Abra el sitio web 
example.com
 en su navegador. Abra las herramientas para desarrolladores y céntrese en la pestaña Console (Consola).

Tarea 2: Obtener h1 en una variable
Utilice el método document.querySelector() para consultar el elemento h1 en la página y asignarlo a la variable denominada h1.

Tarea 3: Codificar una matriz
Declare una nueva variable, asígnele el nombre arr y guarde la siguiente matriz en ella:

[
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]

Tarea 4: Escribir una función de gestión de clics
Escriba una nueva declaración de función denominada handleClicks. No debe aceptar ningún parámetro.

En esta, codifique una declaración switch y pásele un solo parámetro, h1.innerText.

La estructura de la declaración switch debe tener un total de 4 casos (el cuarto es el predeterminado).

El primer caso debe comenzar con case arr[0]:. Debería configurar h1.innerText en arr[1]. En otras palabras, debería asignar el valor de arr[1] a la propiedad h1.innerText. La siguiente línea debe tener solo la palabra clave break.

El segundo caso debe comenzar con arr[1]. Debería configurar h1.innerText en arr[2]. En otras palabras, debería asignar el valor de arr[2] a la propiedad h1.innerText. La siguiente línea debe tener solo la palabra clave break.

El tercer caso debe comenzar con arr[2]. Debería configurar h1.innerText en arr[3]. En otras palabras, debería asignar el valor de arr[3] a la propiedad h1.innerText. La siguiente línea debe tener solo la palabra clave break.

El caso predeterminado debería establecer el valor de la propiedad h1.innerText en arr[0].

Tarea 5: Agregar un detector de eventos
Ha creado una variable h1 en la Tarea 2. Ahora, use esa variable para ejecutar el método addEventListener() en ella. Pase dos argumentos al método addEventListener(): 'click' y handleClicks.
 */

var h1 = document.querySelector('h1')
var arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click'];

function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}
        
