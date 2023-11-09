// Первая задача. Получение комментариев и вывод в консоль только тех комментариев, id которых четные
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
.then(res => res.json())
.then(data => console.log(data.filter(element => element.id%2 == 0)))

// // Вторая задача. Получение фотографий и вывод в консоль массива с альбомами, у которых id > 5

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then(res => res.json())
.then(data => console.log(data.filter(element => element.id > 5)))

// // Третья задача. Получение альбомов и вывод в консоль только тех комментариев, id которых четные

fetch('https://jsonplaceholder.typicode.com/users/1/albums')
.then(res => res.json())
.then(data => console.log(data.filter(element => element.id%2 == 0)))