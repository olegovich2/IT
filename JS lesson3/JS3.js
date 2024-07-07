// task1
// function getName(name) {
//     // let name =prompt('Введите ваше имя:');
//     console.log("Привет" + name);
// }

// getName('VLAD');
// getName('gjkhjkl');
// getName('wqe4q3wer4');
// getName('sdfsf');
// task2
// function arifm(a, b, c) {
//     let result = (a+b+c) / 3;
//     console.log(result);
// }
// arifm(3, 4, 5);
// arifm(77, 88, 110);
// task3
// function arifm(a, b, c) {
//         return (a+b+c) / 3;
        
//     }
//     console.log(arifm(999, 4, 576));
//     console.log(arifm(345, 490, 5000));
//     console.log(arifm(3000000, 403, 0.5));
// task4
// function func(num1, num2) {
//     if (num1>0 && num2>0) {
//         return num1 * num2;
//     } else {
//         return num1 - num2;
//     }
// }
// console.log(func(-4, -5));
// console.log(func(14, 51));
// task5
// function func(num1, num2) {
//     return(num1>0 && num2>0) ? num1 * num2 : num1 - num2;
//     }

// console.log(func(-4, -5));
// console.log(func(14, 51));
// task6
// function Numb(a) {
//     if (parseInt(a) == parseFloat(a)) {
//         console.log(`Целое число: ${parseInt(a)} ${parseFloat(a)}`);
//     } else if (a == '') {
//         console.log('Не валидное число. Вывожу: 0');
//     } else if (isNaN(a) === true) {
//         console.log('Не валидное число. Вывожу: 0');
//     } else if (parseInt(a) != parseFloat(a)) {
//         console.log(`Дробное число. Вывожу целую часть: ${parseFloat(a) - (parseFloat(a) - parseInt(a))}`);
//     }
// }
// Numb('jghkjgh')
// task7
// function numb(a) {
//     a = Number(a);
//     if (isNaN(a)) {
//         return 0;
//     } else {
//         return parseInt(a);
//     }
// }
//  console.log(numb(-3.9));
// task8
// function squares(num1, num2) {
//     return num1 * num1 + num2 * num2;
// }
// console.log(squares(8, 3));
// task9
// function trufalse(num1, num2) {
//     if ((num1 + num2) > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(trufalse(8, 3));
// task10
// function numb() {
//     let a = prompt('Введите число:');
//     a = Number(a);
//     if (isNaN(a)) {
//         return 0;
//     } else {
//         return parseInt(a);
//     }
// }
// function squares(num1, num2) {
//     return num1 * num1 + num2 * num2;
// }
// function any() {
//     let num1 = numb();
//     let num2 = numb();
//     result = squares(num1, num2);
//     return result;    
    
// }
// // console.log(any());
// document.write('Ваш результат вычислений=' + result)
// task11
// let array = ['kbhljh', 34, 24, 456, 3487]
// console.log(array[0], array[2], array[4]);
// array[0] = 67889900;
// console.log(array[0], array[2], array[4]);
// array[9] = 'hgkjghkgh';
// console.log(array);
// task12
// let arr = [];
// let arr1 = [345, 567, 123, 356]
// function arrayAdd() { 
//         arr[arr.length] = 345;
// }
// arrayAdd(arr);
// arrayAdd(arr1);
// arrayAdd(arr);
// arrayAdd(arr);
// arrayAdd(arr1);
// arrayAdd(arr);

// console.log(arr, arr1);
// task13
// let arr = [1,2,3,4,5,6,7,8,9,7,6,6,65,54,4,34];
// function catElArray() {
//     arr[arr.length - 2] = '';
// }
// catElArray(arr);
// console.log(arr);
// task14
// let arr = [1,2,3,4,5,6,7,8,9,7,6,6,65,54,4,34];
// function catElArray() {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);        
//     }
// }
// catElArray(arr);
// task15
// let arr = [1,2,3,4,5,6,7,8,9,7,6,6,65,54,4,34];
// function sumElArray() {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         console.log(sum);        
//     }
// }
// sumElArray(arr);
// task16
// let arr = [1,2,-3,4,-5,-6,7,8,9,7,6,-6,-65,-54,4,34];
// function negativElArray() {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] *= -1;               
//     }
//     console.log(arr);
// }
// negativElArray(arr);