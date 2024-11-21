/*
1. El constructor de la clase Animal tendrá dos propiedades: color y energy. 

2. El prototipo de la clase Animal tendrá tres métodos:isActive(), sleep() y getColor(). 

3. El método isActive(), siempre que se ejecute, reducirá el valor de energy hasta que llegue a 0. El método isActive() también informará el valor actualizado de energy. Si energy está en cero, el objeto animal se irá inmediatamente a dormir al invocar el método sleep() sobre la base de dicha condición. 

4. El método getColor() simplemente registrará en la consola el valor de la propiedad color. 

5. La clase Cat heredará de Animal, con las propiedades adicionales sound, canJumpHigh y canClimbTrees específicas de la clase Cat. También tendrá su propio método makeSound(). 

6. La clase Bird también se heredará de Animal, pero sus propiedades específicas serán bastante diferentes de las de Cat. Es decir, la clase Bird tendrá las propiedades sound y canFly, y también el método makeSound. 

7. La clase HouseCat ampliará la clase Cat y tendrá su propio houseCatSound como propiedad especial. Además, anulará el método makeSound() de la clase Cat, pero lo hará de una manera interesante. Si el método makeSound(), en la invocación, recibe un único argumento de opción, establecido en true, entonces ejecutará super.makeSound(); en otras palabras, ejecute el código de la clase principal (Cat) con la adición de ejecutar console.log(this.houseCatSound). Efectivamente, esto significa que el método makeSound() en el objeto de instancia de la clase HouseCat tendrá dos comportamientos separados, en función de si lo pasamos como true o false. 

8. La clase Tiger también se heredará de Cat y vendrá con su propia propiedad tigerSound, mientras que el resto del comportamiento será más o menos el mismo que en la clase HouseCat. 

9. Por último, la clase Parrot extenderá la clase Bird con su propia propiedad canTalk y su propio método makeSound() y trabajará con dos condicionales: uno que verifica si el valor de true se pasó a makeSound durante la invocación y otro que verifica el valor almacenado dentro de la propiedad this.canTalk.   
*/

class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!