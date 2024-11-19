// Convirtiendo JSON a objeto

const jsonSTR = '{"greeting":"Hello"}';

console.log(JSON.parse(jsonSTR));

const car = {
    model: 'Mazda 3 2024',
    color: 'black',
    price: '$25.000.000'
}

console.log(JSON.stringify(car));