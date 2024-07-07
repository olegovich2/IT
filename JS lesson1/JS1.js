//task1 
// console.log(50 - 15 * 7 + 17 / 3);
// console.log(21 * 3 / 7 - 20);
// console.log(115 % 75);
// task2
// let a = 'машина'
// console.log('кофе' + a);
// let b = 'перекати'
// b+='поле'
// console.log(b);
// task3
// let a = 'я пошел на'
// let b = 'я люблю свою'
// let c = ' работу'
// console.log(a + c);
// console.log(b + c);
// task4
// let a = 50 - 15 * 7 + 17 / 3;
// let b = 21 * 3 / 7 - 20;
// let c = 115 % 75;
// console.log(a == b);
// console.log( a == c || a < c);
// console.log( b == c && b > c);
// task5
// let S = 106;
// let street = 'other street';
// let S = 140;
// let street = 'main street';
// result = (S >= 100) || (S > 80 && street == 'main street')
// console.log(result);
// task6
// let answerUserSquare = prompt('Введите площадь');
// let answerUserStreet = prompt('Введите улицу');
// result = (answerUserSquare >= 100) || (answerUserSquare > 80 && answerUserStreet == 'main street');
// console.log(answerUserSquare);
// console.log(answerUserStreet);
// console.log(result);
// task7
// let answerUserSpeed = prompt('Какая текущая скорость?');
// let answerUserDistance = prompt('Какое расстояние нужно проехать?');
// time = answerUserDistance / answerUserSpeed;
// alert(`Мотоциклист приедет через ${time} часов`);
// task8
// let userSalary = prompt('Введите вашу зарплату числом:');
// userSalary = parseInt(userSalary);
// let incomeTax = userSalary*0.1;
// let rent = 230;
// let userPurchases = 5*80;
// console.log(`Пользователь ввел ${userSalary}р\n Остаток: ${userSalary - incomeTax - rent - userPurchases}р\n Расход: ${rent + userPurchases + incomeTax}р`);
// task9
// let userNumberOne = prompt('Введите первое число:');
// let userNumberTwo = prompt('Введите второе число:');
// userNumberOne = parseInt(userNumberOne);
// userNumberTwo = parseInt(userNumberTwo);
// console.log(userNumberOne + userNumberTwo);
// task10
// let userNumberOne = prompt('Введите первое дробное число:');
// let userNumberTwo = prompt('Введите второе дробное число:');
// userNumberOne = parseFloat(userNumberOne);
// console.log(userNumberOne);
// userNumberTwo = parseFloat(userNumberTwo);
// console.log(userNumberTwo);
// console.log((userNumberOne + userNumberTwo) * 5);
// task11
// let answerUserSquare = prompt('Введите площадь');

// if (answerUserSquare == null || answerUserSquare == '' ) {
//     console.log('вы ничего не ввели');
// }else if (!Number(answerUserSquare)) {
//     console.log('Вы ввели не число');
// } else if (parseFloat(answerUserSquare) < 0) {
//     console.log('нужно ввести положительное число');
// }
// else {
//     console.log('все отлично');
// }


// if (answerUserSquare < 80) {
//     if (answerUserStreet == 'other') {
//     console.log('квартира не подходит');   
//     } else if (answerUserStreet == 'main') {
//         console.log('квартира подходит')
//     }
// } else if (answerUserSquare > 80) {
//     console.log('квартира подходит'); 
// }
// else {
//     console.log('нужно думать');
// }