/**
 * codifiquemos una declaración de función que asigne aleatoriamente la cadena speed o la cadena color a un nombre de variable, y luego construyamos un objeto que tenga solo dos claves: una clave de speed y una clave de color.
 */

function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();