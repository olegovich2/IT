// task1
// let str = 'Hello';
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }
// task2(если слово начинается на 'а' то заменяем на 'array')
// function changeElement (array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][0] == 'a') {
//             array[i] = 'array'
//         }
//     }
//     return array;
// }
// let newArray = changeEllement(['ddd', 'apple','aaaaaa', 'jhkjh', 'asjhdgkh']);
// console.log(newArray);
// task3(если слово заканчивается на 'а' то заменяем на 'sos')
// function changeElement(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][array[i].length - 1] == 'a') {
//             array[i] = 'sos'
//         }
//     }
//     return array;
// }
// let newArray = changeEllement(['ddd', 'appla', 'aaaaaa', 'jhkjh', 'asjhdgkh']);
// console.log(newArray);
// task4(если слово содержит 'а' то заменяем элемент массива на 'sos')
// function changeElement(array) {
//     for (let i = 0; i < array.length; i++) {
//         let str = array[i];
//         for (let j = 0; j < str.length; j++) {
//             if (str[j] == 'a') {
//                 array[i] = 'sos';
//             }
//             continue;
//         }
//     }
//     return array;
// }
// let newArray = changeElement(['ddd', 'appl', 'bbbbabbb', 'jhkjh', 'sjhdgakh']);
// console.log(newArray);
// task5(сумма массивов в двухмерном массиве)
// let arr = [[1, 2], [3, 4], [5, 7]];
// function sumContentElement(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum += arr[i][j];
//         }
//         console.log(sum);
//         sum = 0;
//     }
    
// }
// sumContentElement(arr);
// task6()
// let fruits = {apples: '1', bananas: 'bananas', lemons: 'lemons'};
// console.log(fruits['apples']);
// task7
// let pole = {name: 'Иван', lastName: 'Иванов', age: '35'}
// console.log(pole.name,`${','}`, pole.lastName,`${','}`, pole.age);
// task8
// let pole = {name: 'Иван', lastName: 'Иванов', age: '35'};
// let a = prompt('Введите name, lastName или age');
// console.log(pole[a]);
// task9
// let pole = {name: 'Иван', lastName: 'Иванов', age: '35'};
// let a = prompt('Введите новое имя:');
// pole.name = a;
// console.log(pole.name);
// console.log(pole);
// task10
// let apple = {color: 'red', weight: '200', origin: 'Turkey', price: '3.5'};
// let answer = prompt('Введите название поля на английском');
// let result = (answer in apple) ? console.log(apple[answer]) : alert('Такого поля нет');
// task11(вывести все значения ключей)
// let apple = {color: 'red', weight: '200', origin: 'Turkey', price: '3.5'};
// for (key in apple) {
//     console.log(apple[key]);
// }
// task12a
// let market = {apples: 10, oranges: 5, pears: 15, bananas: 0, lemons: 7};
// for (key in market) {
//     if (market[key] < 5 || market[key] >= 10) {
//         delete market[key]
//     }    
// }
// console.log(market);
// task12b
// let market = {apples: 10, oranges: 5, pears: 15, bananas: 0, lemons: 7, apples2: 15, oranges2: 25, pears2: 750, bananas2: 222, lemons2: 6};
// let max = 0;
// for (key in market) {    
//     if (market[key] >= max) {
//         max = market[key];
//     }       
// }
// console.log(max); 

