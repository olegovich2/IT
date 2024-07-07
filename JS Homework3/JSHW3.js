// task1(Десять раз попросите пользователя ввести данные массива (любые типы могут
// быть). Найдите сумму всех элементов-чисел.)
// function createArray() {
//     array = [];
//     for (let i = 0; i < 10; i++) {
//         array[i] = prompt('Введите любую информацию и числа. На основании данного числа сформируется массив:');
//         if (array[i] == '') {
//             array[i] = 0;
//         }
//     }
//     return array;
// }

// function calcSum() {
//     array = createArray();
//     let sum = 0;
//     let out = '';
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == parseFloat(array[i])) {
//             sum += parseFloat(array[i]);
//             out += array[i] + '  ';
//         } else {
//             out += array[i] + '  ';
//             continue;
//         }
//     }
//     document.write('Массив: ' + '<br>' + out + '<br>' + 'Сумма элементов массива: ' + '<br>' + sum);
//     return sum;
// }
// task2(Написать функцию со вспомогательными функциями, которая просит ввести
// пользователя размеры массива (пример 2x2, 2x3, 3x4, 5x5). И затем также в
// зависимости от выбора пользователя.
// a. сама заполняет его числами по порядку, пока не заполнится массив. (1, 2, 3, ...);
// b. сама заполняет его отрицательными числами по порядку, пока не заполнится
// массив. (-1, -2, -3, ...);
// c. сама заполняет его только четными числами (2, 4, 6, 8...);)

// function rowCol() {
//     let answer;
//         do {
//             answer = prompt('Введите число. На основании данного числа сформируется двумерный массив:');
//             if (answer == '' || answer == null) {
//                 alert('Вы ничего не ввели')
//             } else if (isNaN(answer)) {
//                 alert('Вы ввели не число')
//             } else if (parseInt(answer) < 1) {
//                 alert('Вы ввели отрицательное число')
//             } else if (parseInt(answer) != parseFloat(answer)) {
//                 alert('Вы ввели не целое число')
//             } else {
//                 answer = parseInt(answer);
//             }
//         } while (answer != parseInt(answer));
//         return answer;
// }

// function createArray(n) {
//     array = [[]];
//     RowColLength = rowCol();
//     count = 0;
//     out = '';
//     for (let i = 0; i < RowColLength; i++) {
//             array[i] = [];
//             for (let j = 0; j < RowColLength; j++) {
//                 count++
//                 array[i][j] = count * n;
//             }
//             out += array[i] + '<br>';
//         }
//         document.write('Массив: '+ '<br>' + out);
//         return array;
// }
