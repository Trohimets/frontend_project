// Первая задача
const array = [100, 150, 200, 250]

const array_text = array.map(element => String(element) + ' p')

// Вторая задача
const array_2 =[ ['alex', 32], ['tomas', 17], ['olga', 14], ['andre', 24] ]

const array_result = array_2.filter(element => element[1] > 18)


// Третья задача

const array_products =[ { title: 'пицца', price: 200 }, 
                        { title: 'баранина', price: 300 }, 
                        { title: 'креветки', price: 400 } ]
const sum_of_array = array_products.reduce((acc, number) => {
    return acc + number.price
}, 0)
