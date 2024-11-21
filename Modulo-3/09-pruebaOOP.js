/**
 * Tarea 1: Codifique una clase Person
Codifique una clase Person, con tres parámetros en el constructor: nombre, edad y energía.

Establezca los parámetros predeterminados en la clase Person de la siguiente manera:

name = "Tom"

age = 20

energy = 100
Codifique dos métodos en la clase Person. Llámelos sleep() y doSomethingFun().

El método sleep() debe tomar el nivel de energía existente y aumentarlo en 10.

El método doSomethingFun() debe tomar el nivel de energía existente y disminuirlo en 10.

Tarea 2: Codifique una clase Worker
Codifique una subclase, heredando de la clase Person, y llámela Worker.

La clase Worker tiene dos parámetros adicionales en el constructor:

xp (para "puntos de experiencia")
hourlyWage.
Estas propiedades se establecen en los siguientes valores predeterminados:

xp = 0

hourlyWage = 10
La clase Worker tiene todos los parámetros y métodos de su superclase.

Además, tiene el método goToWork(), que, siempre que se ejecuta, aumenta el valor de la propiedad xp en 10.

Tarea 3: Codificar un objeto intern
Dentro de la función intern, crea una instancia de la clase Worker para codificar un nuevo objeto intern.

El intern debe tener las siguientes características:

nombre: Bob

edad: 21

energía: 110

xp: 0

hourlyWage: 10
Ejecuta el método goToWork() en el objeto intern. Luego, devuelve el objeto intern.

Tarea 4: Codificar un objeto manager
Dentro de la función manager, crea una instancia de la clase Worker para codificar un nuevo objeto manager.

El objeto manager debe tener las siguientes características:

nombre: Alice

edad: 30

energía: 120

xp: 100

salarioporhora: 30
Ejecute el método doSomethingFun() en el objeto manager. Luego, devuelva el objeto manager.

¡Buen trabajo!
 */


// Task 1: Code a Person class
class Person {
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person{ 
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var worker1 = new Worker(0, 10, 'Bob', 21, 110);
    worker1.goToWork();
    return worker1;
}

// Task 4: Code a manager object, methods
function manager() {
    var worker1 = new Worker(100, 30, 'Alice', 30, 120);
    worker1.doSomethingFun();
    return worker1;
}