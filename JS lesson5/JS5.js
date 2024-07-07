// task1
// let dataMyself = {personalInformation: {name: 'Vlad', lastName: 'Pilipenko', age: '32', 
// adress: {country: 'Republic of Belarus', city: 'Gomel'}},
// family: {partner: 'Yana', children: 'none'}};
// function showPersonalInformation(obj) {
//     console.log(obj);
//     let str = obj.personalInformation.name + ' ' + obj.personalInformation.lastName + ', ' + obj.personalInformation.age + ', ' + obj.personalInformation.adress.country + ', ' +obj.personalInformation.adress.city;
//     console.log(str); 
// }
// showPersonalInformation(dataMyself);
// task2
// let dataMyself = {personalInformation: {name: 'Vlad', lastName: 'Pilipenko', age: '32', 
// adress: {country: 'Republic of Belarus', city: 'Gomel'}},
// family: {partner: 'Yana', children: ''}};
// let dataMyself1 = {personalInformation: {name: 'Vlad', lastName: 'Pilipenko', age: '32', 
// adress: {country: 'Republic of Belarus', city: 'Gomel'}},
// family: {partner: 'Yana', children: ['Иван', 'Даша', 'Петр', 'Лаврентий', 'Павел']}};
// function showFamily(obj) {
//         console.log(obj);
//         let nameChild = '';
//         if (obj.family.children.length == 0) {
//             nameChild = 'Нет детей'
//             let str = 'Имя партнера: ' + obj.family.partner + ' ' + 'Дети: ' + nameChild;
//             console.log(str);
//         } else {
//             for (let i = 0; i < obj.family.children.length; i++) {
//                 if (i == obj.family.children.length - 1) {
//                     nameChild += obj.family.children[i]; 
//                 } else {
//                 nameChild += obj.family.children[i] + ', '; 
//                 }           
//             }
//             let str = 'Имя партнера: ' + obj.family.partner + ' ' + 'Дети: ' + nameChild;
//             console.log(str);
//         }

//     }
//     showFamily(dataMyself);
//     showFamily(dataMyself1);
//task3
// function getName() {
//     let nameUser;
//     do {
//         nameUser = prompt('Ваше имя: ');
//         if (nameUser == '' || nameUser == null) {
//             alert('Вы ничего не ввели')
//         }
//     } while (nameUser == '' || nameUser == null);
//     return nameUser;
// }
// function getData(lesson) {
//     let size;
//     do {
//         size = lesson ? getMark(lesson) : getLesson();
//         if (size == '' || size == null) {
//             alert('Вы ничего не ввели')
//         } else if (isNaN(size)) {
//             alert('Вы ввели не число')
//         } else if (parseInt(size) < 1) {
//             alert('Вы ввели отрицательное число')
//         } else if (parseInt(size) != parseFloat(size)) {
//             alert('Вы ввели не целое число')
//         } else {
//             size = parseInt(size);
//         }
//     } while (size != parseInt(size));
//     return size;
// }
// function getMark(lesson) {
//     return prompt('Введите оценку за занятие:' + lesson);
// }
// function getLesson() {
//     return prompt('Введите количество занятий:');
// }
// function createUserObject(name, lessonsSize) {
//     let lessonObject = {};
//     for (let i = 1; i < lessonsSize + 1; i++) {
//         lessonObject[i] = getData(i);
//     }
//     let user = {
//         name: name,
//         lessons: lessonObject
//     }
//     return user;
// }
// function calcScore(lessonsSize) {
//     let sum = 0;
//     let count = 0;
//     for (key in lessonsSize) {
//         sum += lessonsSize[key];
//         count++;
//     }
//     result = 'Ваш средний балл: ' + sum / count;
//     return result;
// }
// function newSemestr(score) {
//     if (score < 7.5) {
//         result = 'Вам не хватает баллов для прохождения на продвинутый курс изучения';
//     } else {
//         result = 'Вам хватает баллов для прохождения на продвинутый курс изучения. Поздравляем!!!';
//     }
//     return result;
// }
// function result() {
//     let nameUser = getName();
//     let lessonsSize = getData();
//     let user = createUserObject(nameUser, lessonsSize);
//     let score = calcScore(user.lessons);
//     console.log(score);
//     console.log(newSemestr(score));
//     console.log(user);
//     return result;
// }
