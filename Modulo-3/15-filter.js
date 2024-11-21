const nums = [10, 20, 30, 40, 50];

console.log(nums.filter(function (num) {
    return num > 20;
}));

//Otra forma de implementar filter()
function mayoresA(num) {
    return num > 20;
}
result = nums.filter(mayoresA);

console.log(result);