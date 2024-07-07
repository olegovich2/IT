// task1
// const arr = [4,0,5,9]
// const result = arr[0]*arr[1]+arr[2]*arr[3]
// console.log(result);
// task2
// const arr = [4,0,5,9]
// const first = arr[0]*arr[3]
// const second = arr[1]*arr[2]
// if ( first > second ) {
//     console.log('first > second');
// } else if ( first < second ) {
//     console.log('first<second');
// } else {
//     console.log('first=second');
// }
// task3
// const str = 'получилось'
// const str1 = str.split('')
// str1 [0] = str1[0].toUpperCase()
// str1 [1] = str1[1].toLowerCase()
// str1 [2] = str1[2].toUpperCase()
// str1 [3] = str1[3].toLowerCase()
// str1 [4] = str1[4].toUpperCase()
// str1 [5] = str1[5].toLowerCase()
// str1 [6] = str1[6].toUpperCase()
// str1 [7] = str1[7].toLowerCase()
// str1 [8] = str1[8].toUpperCase()
// str1 [9] = str1[9].toLowerCase()
// const str2 = str1.join('')
// console.log(str2);
// task4
// const min = 60
// if ( min <= 15 ) {
//     console.log('первая четверть часа');
// } else 
// if( min > 15, min <=30 ) {
//     console.log('вторая четверть часа');
// } else 
// if ( min > 30, min <=45 ) {
//     console.log('третья четверть часа');
// } else 
// if ( min > 45, min <=59 ) {
//     console.log('четвертая четверть часа');
// } else {
//     console.log('максимальное значение 59 минут 59 секунд, далее идет 0 минут');
// }
// task5а
// const arr1 = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']
// const arr2 = ['Понедельник', 'Вторник', 'Среда', 'Чеверг', 'Пятница', 'Суббота', 'Воскресенье']
// const answer = prompt('Дни недели вывести в консоль на английском?(Да/Нет) Display the days of the week in the console in English?(Yes/No)')
// if (answer === 'Да') {
// console.log(arr1);
// } else if (answer === 'Yes'){
//         console.log(arr1);
// } else {
//     console.log(arr2);
// }
// task5b
// const arr1 = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']
// const arr2 = ['Понедельник', 'Вторник', 'Среда', 'Чеверг', 'Пятница', 'Суббота', 'Воскресенье']
// const answer = prompt('Дни недели вывести в консоль на английском?(Да/Нет) Display the days of the week in the console in English?(Yes/No)') 
// switch (answer) {
//         case 'Да':
//          console.log(arr1);
//         break;
//         case 'Yes':
//          console.log(arr1);
//             break;
//         case 'No':
//         console.log(arr2);
//         break;
//         case 'Нет':
//         console.log(arr2);
//         break;
//     default:
//         alert('Необходимый ответ не введен. Для повторения попытки перезагрузите страницу. The required response has not been entered. To try again, reload the page.')
//         break;
// }
// task6
// const answer = prompt('Введите ваше имя и фамилию. (Enter your first and last name.)')
// const a = answer.split(' ')
// a [0] = a[0].toLowerCase()
// a [1] = a[1].toLowerCase()
// const a1 = a[0].split('')
// a1[0] = a1[0].toUpperCase()
// const a2 = a[1].split('')
// a2[0] = a2[0].toUpperCase()
// const c = a1.join('')
// const d = a2.join('')
// console.log(`${c} ${d}`);
// task7
// arr = ['a']
// str = 'qwerty'
// arr1 = str.split('')
// arr2 = arr1.concat(arr)
// arr3 = arr1.reverse()
// arr4 = arr2.concat(arr3)
// console.log(arr4);
// task8
// const answer = prompt('Enter your name and age separated by a space.')
// const a = answer.split(' ')
// a [0] = a[0].toLowerCase()
// const a1 = a[0].split('')
// a1[0] = a1[0].toUpperCase()
// const c = a1.join('')
// console.log('Hello',`${c}!`, 'You are', `${a[1]}`, 'years');