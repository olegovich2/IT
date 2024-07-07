// task1(Какую книгу предпочитаете?)
// let genreBook = prompt('Какой жанр предпочитаете? 1 - Роман, 2 -Детектив, 3 - Фентези:');
// if (genreBook == '') {
//         alert('Вы ничего не ввели.');
//     } else if (isNaN(genreBook) === true) {
//         alert('Вы ввели не число.');
//     } else if (genreBook <= 0) {
//         alert('Нужно ввести положительное число.');
//     }
// let modernLit = confirm('Предпочитаете современную литературу?');
// let rusAuthor = confirm('Хотели бы книгу русского автора?');
// if (genreBook == 1 && modernLit == false && rusAuthor == true) {
//     alert('Предлагаем вам почитать - "Война и мир"');
// } else if (genreBook == 2 && modernLit == false && rusAuthor == false) {
//     alert('Предлагаем вам почитать - "Шерлок Холмс"');
// } else if (genreBook == 2 && modernLit == true && rusAuthor == false) {
//     alert('Предлагаем вам почитать - "Девушка в поезде"');
// } else if (genreBook == 3 && modernLit == true && rusAuthor == true) {
//     alert('Предлагаем вам почитать - "Ночной дозор"');
// } else if (genreBook == 3 && modernLit == true && rusAuthor == false) {
//     alert('Предлагаем вам почитать - "Гарри Поттер"');
// } else {
//     alert('К сожалению, не смогли подобрать вам книгу');
// }
// 
// 
// 
// task2(Создать матрицу, выполнить проверку на дурака, рассчитать сумму каждой строки матрицы, суммы диагоналей, вывести на экран)
// let RowColLength = prompt('Введите число. На основании данного числа сформируется двумерный массив:');
// if (RowColLength == '') {
//     alert('Вы ничего не ввели.');
// } else if (isNaN(RowColLength) === true) {
//     alert('Вы ввели не число.');
// } else if (RowColLength <= 0) {
//     alert('Нужно ввести положительное число.');
// }
// RowColLength = parseFloat(RowColLength);
// const array = [[]];
// let sum = 0;
// let sumDiag = 0;
// let sumDiag2 = 0;
// for (let i = 0; i < RowColLength; i++) {
//     array[i] = [];
//     for (let j = 0; j < RowColLength; j++) {
//         array[i][j] = Math.floor(Math.random() * 100);
//     }
// }
// console.log(array);
// for (let n = 0; n < RowColLength; n++) {
//     for (let i = n; i < n + 1; i++) {
//         for (let j = 0; j < array.length; j++) {
//             sum += array[i][j];
//         }
//     }
//     console.log(`Сумма ${n + 1}-ой строки матрицы: ${sum}`);
// div = document.createElement('div');
// div.className = `number${n}`;
// div.innerHTML = `Сумма ${n + 1}-ой строки матрицы: ${sum}`;
// document.body.append(div);
//     sum = 0;
// }
// for (let i = 0, j = 0; i < RowColLength; i++, j++) {
//     sumDiag += array[i][j];
// }
// console.log(`Сумма по диагонали: ${sumDiag}`);
// document.getElementById('out3').innerHTML = `Сумма по диагонали: ${sumDiag}`;
// for (let i = 0, j = RowColLength - 1; i < RowColLength; i++, j--) {
//     sumDiag2 += array[i][j];
// }
// console.log(`Сумма по  второй диагонали: ${sumDiag2}`);
// document.getElementById('out4').innerHTML = `Сумма по  второй диагонали: ${sumDiag2}`;
// out = '';
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//        out +=  array[i][j] + '  ';
//     }
//     out += '<br>'
// }
// document.getElementById('out1').innerHTML = out;