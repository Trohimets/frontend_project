// Первая задача
var array = [100, 150, 200, 250];
var array_text = array.map(function (element) { return String(element) + ' p'; });
// Вторая задача
var array_2 = [['alex', 32], ['tomas', 17], ['olga', 14], ['andre', 24]];
var array_result = array_2.filter(function (element) { return element[1] > 18; });
// Третья задача
var array_products = [{ title: 'пицца', price: 200 },
    { title: 'баранина', price: 300 },
    { title: 'креветки', price: 400 }];
var sum_of_array = array_products.reduce(function (acc, number) {
    return acc + number.price;
}, 0);
console.log(sum_of_array);
