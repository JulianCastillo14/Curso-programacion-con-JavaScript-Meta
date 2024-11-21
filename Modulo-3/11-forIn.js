var car = {
    price: 50000000,
    color: 'Azul',
    marca: 'Mazda',
    modelo: '2024'
}

for (propiedades in car){
    console.log(propiedades + ":", car[propiedades]);
}