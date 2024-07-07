// let str = 'https://logarifm.com';
// let str1 = 'https://logarifm.by';
// let str2 = 'https://logarifm.ru';
// substr = 'http://';
// substr1 = 'https://';
// substr2 = '.com';
// substr3 = '.by';
// substr4 = '.ru';
// function inspectorStart(n, a) {
//     let correctStr = n.toLowerCase();
//     return correctStr.startsWith(a);
// }

// function inspectorEnd(n, a) {
//     let correctStr = n.toLowerCase();
//     return correctStr.endsWith(a);

// }

// console.log(inspectorStart(str, substr), inspectorStart(str1, substr1));
// console.log(`на ком:${inspectorEnd(str, substr2)}`, `на ком:${inspectorEnd(str1, substr2)}`, `на ком:${inspectorEnd(str2, substr2)}`);
// console.log(`на бай:${inspectorEnd(str, substr3)}`, `на бай:${inspectorEnd(str1, substr3)}`, `на бай:${inspectorEnd(str2, substr3)}`);
// console.log(`на ру:${inspectorEnd(str, substr4)}`, `на ру:${inspectorEnd(str1, substr4)}`, `на ру:${inspectorEnd(str2, substr4)}`);

// task2
// let str = 'stringify';
// console.log(str.slice(5, -1));
// console.log(str.substring(5, 0));
// console.log(str.substr(1, 5));

// task3
// let str = 'JavaScript is a programming language.'
// console.log(str.slice(28, -1));
// console.log(str.substring(28, 36));
// console.log(str.substr(28, 8));

// task4
// let str = '$100';

// function extractValue(str) {
//  return str.slice(1);
// }
// console.log(extractValue(str));

// task5
// let str = 'иван';

// function upFirstLetter(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(upFirstLetter(str));
// function upFirstLetter1(str) {
//     array = str.split('');
//     array[0] = array[0].toUpperCase();
// return array.join('');
// }
// console.log(upFirstLetter1(str));

// task6
// let str = '       иван';
// function upFirstLetter(str) {
//     let newStr = str.trim();
//     return newStr[0].toUpperCase() + newStr.slice(1);
// }
// console.log(upFirstLetter(str));

// task7
// let str = 'Домашний осел (лат. Equus asinus asinus), или ишак - одомашненный подвид дикого осла';
// substr = '(';
// substr1 = ')';
// let a = str.indexOf(substr);
// let b = str.indexOf(substr1);
// console.log(a, b);
// function newStr(a, b) {
//     return str.slice(0, a) + str.slice(b + 1);
// }
// console.log(newStr(a, b));

// task8
// let str = 'Яблоки круглые и яблоки сочные';
// let oldStr = 'яблоки';
// let newStr = str.toLowerCase().replaceAll(oldStr, 'апельсины');
// console.log(newStr);

// task9
// let str = 'Java is awesome. Java is fun';
// let oldStr = 'Java';
// let newStr = str.replace(oldStr, 'JavaScript');
// let newStr1 = str.replaceAll(oldStr, 'JavaScript');
// console.log(newStr);
// console.log(newStr1);

// task10
// let str = '1-2-3-4-5';
// let oldStr = '-';
// let newStr1 = str.replaceAll(oldStr, '.');
// console.log(newStr1);

// task11
let str = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек'
console.log(str.split(','));