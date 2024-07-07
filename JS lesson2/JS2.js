// task1
// let myNumber = 7;
// let userNumber = prompt('Введите число от 0 до 10:');
// if (userNumber == '') {
//     alert('Вы ничего не ввели.')
// } else if (isNaN(userNumber) === true) {
//     alert('Вы ввели не число.')
// } else if (userNumber <= 0) {
//     alert('Нужно ввести положительное число.')
// }
// myNumber = parseFloat(myNumber);
// userNumber = parseFloat(userNumber);
// if (myNumber > userNumber) {
//     alert('Вы не угадали. Ваше число меньше загаданного.')
// } else if (myNumber < userNumber) {
//     alert('Вы не угадали. Ваше число больше загаданного.')
// } else if (myNumber === userNumber) {
//     alert('Вы угадали.')
// }



// task2
// let apple = prompt('Введите число от 0 до 5:');
// apple = parseFloat(apple);
// switch (apple) {
//     case (0):
//         alert('Ничего нет')
//         break;

//     case (1):
//         alert('Одно яблоко')
//         break;

//         case (2):
//         alert('Два яблока')
//         break;

//         case (3):
//         alert('Три яблока')
//         break;

//         case (4):
//         alert('Четыре яблока')
//         break;

//         case (5):
//         alert('Пять яблок')
//         break;

// }


// task3
// let month = prompt('Введите месяц рождения:')
// switch (month) {
//     case 'январь':
//         case 'февраль':
//         case 'декабрь':    
//         alert('Вы родились зимой')
//         break;

//         case 'март':
//         case 'апрель':
//         case 'май':    
//         alert('Вы родились весной')
//         break;

//         case 'июнь':
//         case 'июль':
//         case 'август':    
//         alert('Вы родились летом')
//         break;

//         case 'сентябрь':
//         case 'октябрь':
//         case 'ноябрь':    
//         alert('Вы родились осенью')
//         break;

//     default:
//         alert('Нет такого месяца')
//         break;
// }


// task4
// let number = 9;
// while (number <= 50) {
//     if (number % 10 === 0) {
//     console.log(number);
// }
//     number+=1
// } 



// task5
// let start = 1;
// let result;
// do { if (start > 20) {
//     alert('stop');
//     break;
// }
//     let result = confirm('Число ' + start + ' Я угадал?');
//     start+=1
// } while (!result);



// task6
// let userNumber = prompt('Загадайте число от 1 до 20:')
// userNumber = parseFloat(userNumber);
// let compNumber = 0;
// do {
//     result = confirm('Это ваше число: ' + compNumber + ' ?');
//     compNumber+=1
// } while (result == false);



// task7
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
    
// }

// task8
// for (let i = 0; i <= 10; i++) {
//     let number = 6;
//     result = number * i;
//     console.log(result);
    
// }


//task9(посмотреть как сделать таблицей)
// let arr = [];
// for (let i = 1; i <= 9; i++) {
//     arr.push([]);
//     for (let j = 1; j <= 10; j++) {
//         arr[i].push(`${i} * ${j} = ${i*j}`);
        
//     }
    
// }
// console.table(arr)
// task10
// for (let i = 0; i <= 100; i++) {
//     if ( i == 7 || i == 17 || i == 29 || i == 78) {
//         continue;
//     }
//     console.log(i);
// }
// task11
// let n = 10;
// while (true) {
//     console.log(n);
//     n+=10
//     if (n >= 100) {
//         break;
//     }
// }