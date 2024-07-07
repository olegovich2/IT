// task1a
// function res(a,b,d) {
//     let c = a - b;
//     let result = c + d;
//     console.log(result);
// }
// res(556,349,1002)
// task1b
// function f(str) {
//     const arr = str.split('')
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             arr[i] = arr[i].toUpperCase()
//         } else {
//             arr[i] = arr[i].toLowerCase()
//         }

//     }
//     console.log(arr.join(''));
// }
// f('happy new year!')
// task1c
// function f(a, b, c) {
//     let A = []
//     for (let i = 0; i < 100; i += 1) {
//         random = Math.floor(Math.random() * 100)
//         let a = random
//         A.push(a)
//     }
//     console.log(A);
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] % a === 0) {
//             console.log(`Число кратное ${a}: ${A[i]}`);
//         } else if (A[i] % b === 0) {
//             console.log(`Число кратное ${b}: ${A[i]}`);
//         } else if (A[i] % c === 0) {
//             console.log(`Число кратное ${c}: ${A[i]}`);
//         } else {
//             console.log(`Число не кратно аргументам данной функции: ${A[i]}`);
//         }
//     }
// }
// f(3, 5, 7)
// task2(первый способ)
// function arrayMax() {
//     let A = []
//     for (let i = 0; i < 20; i += 1) {
//         random = Math.floor(Math.random() * 100)
//         let a = random
//         A.push(a)
//     }
//     let max = A[0]
//     for (let i = 0; i < A.length; i++) {
//         if (max < A[i]) {
//             max = A[i]
//         }
//     }
//     console.log(A, `max: ${max}`);
// }
// arrayMax()
// (второй способ)
// function arrayMax() {
//     let A = []
//     for (let i = 0; i < 20; i += 1) {
//         random = Math.floor(Math.random() * 100)
//         let a = random
//         A.push(a)
//     }
//     let max = Math.max(...A);
//     console.log(A, `max: ${max}`);
// }
// arrayMax()
// task3(первый способ)
// function arrayMin() {
//     let A = []
//     for (let i = 0; i < 20; i += 1) {
//         random = Math.floor(Math.random() * 100)
//         let a = random
//         A.push(a)
//     }
//     let min = A[0]
//     for (let i = 0; i < A.length; i++) {
//         if (min > A[i]) {
//             min = A[i]
//         }
//     }
//     console.log(A, `min: ${min}`);
// }
// arrayMin()
// (второй способ)
// function arrayMin() {
//     let A = []
//     for (let i = 0; i < 20; i += 1) {
//         random = Math.floor(Math.random() * 100)
//         let a = random
//         A.push(a)
//     }
//     let min = Math.min(...A);
//     console.log(A, `min: ${min}`);
// }
// arrayMin()
// task4
// const str = prompt('Напишите что-нибудь:')
// const str = 'skjashfkljsngjfjTFYQTFW'
// console.log(str);
// const arr = str.split('')
// console.log(arr);
// let arr1 = []
// for (let i = 0; i < arr.length; i++) {
//     let count = 0
//     for (let b = 0; b < arr.length; b++) {
//         if (arr[i] === arr[b] && i != b) {
//             count++
//         }
//     }
//     if (count < 1) {
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1);
// task5
// const a = prompt('Введите число:')
// function factorial(a) {
//     let result = 1
//     while (a) {
//         result *= a--
//         console.log(result);
//     }
//     console.log(result);
// }
// factorial(a)
// task6
// const a = prompt('Введите число:')
// function array(a) {  
// let A = []
// for (let i = 0; i < a; i += 1) {
//     random = Math.floor(Math.random() * 100)
//     let a = random
//     A.push(a)
// }
// let max = A[0]
// let min = A[0]
// let sum = 0
// for (let i = 0; i < A.length; i++) {
//     if (max < A[i]) {
//         max = A[i]
//     }
// }
// for (let i = 0; i < A.length; i++) {
//     if (min > A[i]) {
//         min = A[i]
//     }
// }
// for (let i = 0; i < A.length; i++) {
//     sum += A[i]    
// }
// let average = (sum) / (a)
// console.log(`Массив: [${A}]`,`max: ${max}`,`min: ${min}`,`Сумма всех элементов массива: ${sum}`,`Среднее арифметическое массива: ${average}`);     
// }
// array(a)
// task7
// let n = prompt('Enter your number:')
// function fibonacci(n) {
// let a = 0
// let b = 1
// const fib = [a,b]
// for (let i = 2; i <= n-2; i++) {
//     fib[i] = fib[i-1] + fib[i-2]
//     fib.push(fib[i])    
// }
// console.log(fib);
// }
// fibonacci(n)
