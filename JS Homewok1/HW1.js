// task1 (попросить пользователя ввести три числа по очереди. Вернуть разность удвоенной суммы первого 
// и третьего чисел и утроенного второго числа)
// let firstNumber = prompt('Введите первое число:');
// let secondNumber = prompt('Введите второе число:');
// let thirdNumber = prompt('Введите третье число:');
// firstNumber = parseFloat(firstNumber);
// secondNumber = parseFloat(secondNumber);
// thirdNumber = parseFloat(thirdNumber);
// alert('Производится рассчет согласно условиям задачи\nВернуть разность удвоенной суммы первого и третьего чисел и утроенного второго числа');
// alert(`Итог рассчетов: ${(firstNumber + thirdNumber) * 2 - 3 * secondNumber}`);
// 
// 
// 
// task2 (попросить пользователя ввести по очереди 2 числа. Определить четность этих чисел и вывести результат 
// в виде "Оба числа являются четными - true" или "Оба числа являются четными - false" )
// let firstNumber = prompt('Введите первое число:');
// let secondNumber = prompt('Введите второе число:');
// firstNumber = parseFloat(firstNumber);
// secondNumber = parseFloat(secondNumber);
// let result;
// if (firstNumber % 2 === 0 && secondNumber % 2 === 0) {
//     result = true    
// } else {
//     result = false
// }
// alert(`Оба числа являются четными - ${result}`);
// 
// 
// 
// task3 (попросить пользователя ввести по очереди два числа. Если они четные вернуть сумму, 
// если они нечетные - произведение, иначе вернуть нечетное число)
// let firstNumber = prompt('Введите первое число:');
// let secondNumber = prompt('Введите второе число:');
// firstNumber = parseFloat(firstNumber);
// secondNumber = parseFloat(secondNumber);
// let result;
// if (firstNumber % 2 === 0 && secondNumber % 2 === 0) {
//     result = firstNumber + secondNumber;
//     alert(`Оба числа четные - возвращаю сумму: ${result}`);    
// } else if (firstNumber % 2 !== 0 && secondNumber % 2 !== 0) {
//     result = firstNumber * secondNumber;
//     alert(`Оба числа нечетные - возвращаю произведение: ${result}`);
// } else if (firstNumber % 2 !== 0 && secondNumber % 2 === 0) {
//     result = firstNumber;
//     alert(`Возвращаю нечетное число: ${result}`);
// } else if (firstNumber % 2 === 0 && secondNumber % 2 !== 0) {
//     result = secondNumber;
//     alert(`Возвращаю нечетное число: ${result}`);
// }
