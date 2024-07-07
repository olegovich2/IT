// task1
// let str = 'url("https://www.example.com/path?query=123#hash")';
// let str = 'url("ftp://yandex.ru")';
// let substr = '://';
// let substr1 = '/';
// let substr2 = '#';
// let substr3 = '")';
// let substr4 = '"';
// let f = str.indexOf(substr4);
// let fe = str.indexOf(substr3);
// console.log(str.slice(f+1, fe));
// let a = str.indexOf(substr);
// let b = str.indexOf(substr4);
// console.log(str.slice(b+1, a + 3));
// let str2 = str.slice(a + 3);
// let c = str2.indexOf(substr1);
// console.log(str2.slice(0, c));
// let d = str2.indexOf(substr2);
// let e = str2.indexOf(substr3);
// console.log(str2.slice(d, e));

// task2
// let str = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';
// const arr = str.split(',');
// console.log(arr);
// const array = [];
// array[0] = arr[arr.length-1];
// console.log(array);
// for (let i = 0; i < arr.length-1; i++) {
//     array[i+1] = arr[i];
// }
// console.log(array);
// let newStr = array.join(',');
// console.log(newStr);

// task3
// let str = 'my-short-string';
// let str1 = 'background-color';

// function camelize(a) {
//     const newArray = [];
//     const array = a.split('-');
//     newArray[0] = array[0];
//     for (let i = 1; i < array.length; i++) {
//         newArr = array[i].split('');
//         let str1 = newArr[0];
//         let str0 = str1.toUpperCase();
//         newArr[0] = str0;
//         newArr.join('');
//         let n = newArr.join('');
//         newArray[i] = n;
//     }
//     let newStr = newArray.join('');
//     return newStr;
// }
// console.log(camelize(str)); 
// console.log(camelize(str1)); 

// task4
// const arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// task5
// const arr = [1, 2, 3];
// arr.unshift(-2, -1, 0);
// console.log(arr);

// task6
// const arr = ['что-то', 'еще'];
// let a = arr.pop();
// arr.unshift(a);
// console.log(arr);
// let str = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';
// const array = str.split(',');
// let b = array.pop();
// array.unshift(b);
// let newStr = array.join(',');
// console.log(newStr);

// task7
// const arr = ['Бильбо', 'Гэндальф', 'Назгул'];
// for (const iterator of arr) {
//     console.log(iterator);
// }
// task8
// const array = ['груши', 'яблоки', 'сливы', 'абрикосы', 'апельсины'];
// const newArray = [];
// for (let element of array) {
//     newArray.unshift(element);
// }
// console.log(newArray);