/*
Cuando empecemos a crear una clase en JavaScript lo fundamental que debemos definir es sus propiedades y el método constructor que nos sirve para especificar que propiedades debe tener una futura instancia de la clase  
*/

class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights in?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var myFirstTrain = new Train('blue', true);
console.log(myFirstTrain);

var mySecondTrain = new Train('orange', false);
console.log(mySecondTrain,'\n');

mySecondTrain.toggleLights();
mySecondTrain.lightsStatus();
mySecondTrain.getSelf();
mySecondTrain.getPrototype();

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
highSpeed1.getSelf();
highSpeed1.toggleHighSpeed();
highSpeed1.toggleLights();
highSpeed1.getSelf();
highSpeed1.getPrototype();