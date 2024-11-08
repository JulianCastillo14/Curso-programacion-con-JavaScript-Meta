var car = {
    price: 50000000,
    color: 'Azul',
    marca: 'Mazda',
    modelo: '2024'
}

for (key of Object.keys(car)){
    console.log(key, ":", car[key]);
}