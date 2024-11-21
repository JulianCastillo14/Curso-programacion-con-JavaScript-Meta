[0, 10, 20, 30, 40, 50].map(function(num){
    return num / 10;
});

//otra forma de implementar
function dividir10 (num){
    return num / 10;
}

console.log([0, 10, 20, 30, 40, 50].map(dividir10));