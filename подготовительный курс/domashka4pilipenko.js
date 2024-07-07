// task1
// for( let i = 0; i <= 50; i++) {
//     if( i % 3 === 0 && i % 5 === 0) {
//     let i = 'FizzBuzz'
//     console.log(i);
//     } else if( i % 5 === 0) {
//         let i = 'Buzz'
//         console.log(i);
//     } else if( i % 3 === 0) {
//         let i = 'Fizz'
//         console.log(i);
//     } else {    console.log(i); }
// }
// task2a(вывод четных элементов массива в консоль)
// arr = [30,13,21,34,99,168,39,222,321,1,0]
// for ( i = 0; i < arr.length; i++) {
//     if( i % 2 === 0) {
//         let a = arr[i]
//         console.log(arr[i]);
//     }
// }
// task2b(вывод нечетных элементов массива в консоль)
// arr = [30,13,21,34,99,168,39,222,321,1,0]
// for ( i = 0; i < arr.length; i++) {
//     if( i % 2 !== 0) {
//         let a = arr[i]
//         console.log(arr[i]);
//     }
// }
// task3
// str = 'Сейчас перевернем'
// str = prompt('Напишите что-нибудь:')
// let newStr = ''
// for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//         // console.log(newStr);
// }
// console.log(newStr);
// task4
// alert('Вас приветствует игра "Угадай число!", для продолжения нажмите "ОК".')
// alert('Суть игры: Вы должны угадать число, загаданное компьютером. Игра подскажет Вам больше ваше число или меньше, чем загаданное компьютером. Нажмите"ОК".')
// let r = Math.floor(Math.random() * 10)
// console.log(r);
// while (true) {
//     let n = prompt('Введите ваше число от 0 до 9:')
//     if (isNaN(n)) {
//         alert('Ошибка ввода. Перезагрузите страницу');
//         break;
//     } else if (n < r) {
//         alert('Ваше число меньше загаданного.');
//         // console.log(n,r);
//     } else if (n > r) {
//         alert('Ваше число больше загаданного.');
//         // console.log(n,r);
//     } else {
//         alert('Поздравляем, Вы угадали загаданное число! Конец.');
//         console.log('Конец');
//         break;
//     }
// }  
// task5
// for (let a = 0; a < 45; a++) {
//     if (a > 10) {
//         if (a < 23) {
//             console.log([a]);
//             for (let b = 0; b < 26; b++) {
//                 if (b > 4) {
//                     console.log(`${a}` * b);
//                 }
//             }
//         } else if (a > 23) {
//             console.log([a]);
//             for (let b = 0; b < 26; b++) {
//                 if (b > 4) {
//                     console.log(`${a}` * b);
//                 }
//             }
//         }
//     }
// }
// task6a(Рандом*10)
// let A = []
// for (let i = 0; i < 10; i += 1) {
//     random = Math.floor(Math.random() * 10)
//     let a = random
//     random = Math.floor(Math.random() * 10)
//     let b = random
//     let c = a * b
//     A.push(c)
// }
// console.log(A);
// task6b(Рандом*100)
// let A = []
// for (let i = 0; i < 10; i += 1) {
//     random = Math.floor(Math.random() * 100)
//     let a = random
//     A.push(a)
// }
// console.log(A);
// task7(есть уязвимость: если не вводить значение в диалоге, то программа принимает ее значение за 0, как решить пока не дошло)
// let c = 12
// let count = 0
// let count1 = 0
// for (i = 0; i < c; i++) {
//     random = Math.floor(Math.random() * 3)    
//     let a = prompt('Это игра "Камень-Ножницы-Бумага". Условия игры: "0" - Камень; "1" - Ножницы; "2" - Бумага. Играть будем до трех побед. Введите число:')    
//     if (a == 0) {
//         alert('Вы выбрали Камень')
//         if (a == 0 && random == 0) {
//             alert('Ничья')                       
//         } else if (a == 0 && random == 1) {
//             alert('Вы выиграли: Камень бьёт Ножницы')
//             while( (a == 0 && random == 1) || (a == 1 && random == 2) || (a == 2 && random == 0)) {
//                 count++
//                 break;
//             }  
//             while ((a == 0 && random == 2) || (a == 1 && random == 0) ||(a == 2 && random == 1)) {
//                 count1++
//                 break;
//             } 
//         } else if (a == 0 && random == 2) {
//             alert('Вы проиграли: Бумага накрыла Камень')
//             while( (a == 0 && random == 1) || (a == 1 && random == 2) || (a == 2 && random == 0)) {
//                 count++
//                 break;
//             }  
//             while ((a == 0 && random == 2) || (a == 1 && random == 0) ||(a == 2 && random == 1)) {
//                 count1++
//                 break;
//             } 
//         }
//     } else if (a == 1) {
//         alert('Вы выбрали Ножницы')
//         if (a == 1 && random == 0) {
//             alert('Вы проиграли: Камень бьёт Ножницы')  
//             while( (a == 0 && random == 1) || (a == 1 && random == 2) || (a == 2 && random == 0)) {
//                 count++
//                 break;
//             }  
//             while ((a == 0 && random == 2) || (a == 1 && random == 0) ||(a == 2 && random == 1)) {
//                 count1++
//                 break;
//             } 
//         } else if (a == 1 && random == 1) {
//             alert('Ничья')        
//         } else if (a == 1 && random == 2) {
//             alert('Вы выиграли: Ножницы режут Бумагу') 
//             while( (a == 0 && random == 1) || (a == 1 && random == 2) || (a == 2 && random == 0)) {
//                 count++
//                 break;
//             }  
//             while ((a == 0 && random == 2) || (a == 1 && random == 0) ||(a == 2 && random == 1)) {
//                 count1++
//                 break;
//             } 
//         }
//     } else if (a == 2) {
//         alert('Вы выбрали Бумагу')
//         if (a == 2 && random == 0) {
//             alert('Вы выиграли: Бумага накрыла Камень')  
//             while( (a == 0 && random == 1) || (a == 1 && random == 2) || (a == 2 && random == 0)) {
//                 count++
//                 break;
//             }  
//             while ((a == 0 && random == 2) || (a == 1 && random == 0) ||(a == 2 && random == 1)) {
//                 count1++
//                 break;
//             } 
//         } else if (a == 2 && random == 1) {
//             alert('Вы проиграли: Ножницы режут Бумагу')   
//             while( (a == 0 && random == 1) || (a == 1 && random == 2) || (a == 2 && random == 0)) {
//                 count++
//                 break;
//             }  
//             while ((a == 0 && random == 2) || (a == 1 && random == 0) ||(a == 2 && random == 1)) {
//                 count1++
//                 break;
//             }        
//         } else if (a == 2 && random == 2) {
//             alert('Ничья')       
//         }
//     } else if (isNaN(a) ) {
//         alert('Ошибка ввода. Повторите попытку')
//     }
//     console.log(`Ваше число:${a}`,`Число компьютера:${random}`);
//     console.log(`Игрок:${count}`,`Компьютер:${count1}`);
//     if (count === 3) {
//         alert('Поздравляю! Вы выиграли!')
//         break;
//     } else if (count1 === 3) {
//         alert('К сожалению вы проиграли.')
//         break;
//     }
// }
// console.log('Итог текущей игры:',`Игрок:${count}`,`Компьютер:${count1}`);



