let name = prompt('Ваше имя:');
let surname = prompt('Ваша фамилия:');
let patronymic = prompt('Ваше отчество:');
let age = prompt('Ваш возраст:');
let gender = confirm('Ваш пол мужской?');
age = parseFloat(age);
let ageInDays = Math.round(age * 365.25);
let after5Years = age + 5;
let pension;
if (gender == true) {
    gender = 'мужской'
} else {
    gender = 'женский'
}
if (age >= 63 && gender == 'мужской') {
    pension = 'пенсионер'
} else if (age < 63 && gender == 'мужской') {
    pension = 'нет'
} else if (age >= 58 && gender == 'женский') {
    pension = 'пенсионерка'
} else if (age < 58 && gender == 'женский') {
    pension = 'нет'
}
alert(`Ваше ФИО: ${surname} ${name} ${patronymic}\n Ваш возраст в годах: ${age}\n Ваш возраст в днях: ${ageInDays}\n Через 5 лет Вам будет: ${after5Years}\n Ваш пол: ${gender}\n Вы на пенсии: ${pension}`);