// task(Создать массив обьектов товаров на рынке, каждый из которых имеет название,
//  цену и количество.)
// Написать функции (желательно вместе со вспомогательными функциями и с 
// проверками), которые позволяют делать следующие действия
// A. Показывает все названия товаров с ценой
//  	Яблоко: 3.5 за кг
// 	Апельсин: 6 за кг
// ...
// B. Пользователь передает название товара, а в ответ получает его 	
// цену в виде сообщения «Стоимость товара ‘апельсин’ - 6
// C. Спрашивает сколько денег у пользователя и отвечает сколько кг одного 
// товара он может купить за эту сумму. (на 9-10 баллов)
// Пример: Ввод -> 15
// Вывод: -> 4 кг яблоко или 2 кг апельсин или 2 кг банан или 2 кг мандарин 
// или 5 кг груша

const array = [
    {name: 'яблоко', price: 3.5, count: 10}, 
    {name: 'апельсин', price: 6, count: 14}, 
    {name: 'банан', price: 5.1, count: 2}, 
    {name: 'мандарин', price: 5.9, count: 9}, 
    {name: 'груша', price: 1.3, count: 5}
];

function nameAndPrice(n) {
    out = '';
for (let i = 0; i < n.length; i++) {
    object = n[i];    
    out += object.name + ': '+ object.price + ' руб. за кг' + '<br>';   
}
document.write(out);
console.log(array);
return out;
}


function searchName(n) {
let strName = prompt('Введите название товара и получите цену.')
out = '';
for (let i = 0; i < n.length; i++) {
    object = n[i];    
    if (strName == object.name) {  
    out = 'Стоимость товара ' + object.name + ': '+ object.price + ' руб. за кг';
}
}
if (out == '') {
    out = 'Стоимость товара ' + strName + ': не обнаружена. Возможно такого товара нет на складе.';
} 
document.write(out);
console.log(array);
return object;
}


function countName(n) {
    let answerPrice = parseFloat(prompt('Введите сумму, которой располагаете, и мы рассчитаем сколько и каких продуктов вы сможете приобрести.'));
    let replacement = '';
    let out = '';
    for (let i = 0; i < n.length; i++) {
            object = n[i]; 
            replacement = parseInt(answerPrice / object.price);  
            if (replacement > object.count) {
                replacement = object.count;
                if (i == n.length - 1) {
                    out += replacement + ' кг ' +  object.name; 
                } else {
                out += replacement + ' кг ' +  object.name + ' или ';
                }
            } else if (replacement == 0) {
                replacement = '';
                out += replacement;
                             
            } else if (replacement < object.count) {
            if (i == n.length - 1) {
                out += replacement + ' кг ' +  object.name; 
            } else {
            out += replacement + ' кг ' +  object.name + ' или ';
            }
        }
            replacement = '';
        
        }
        document.write('Сумма: ' + answerPrice + ' руб.' + '<br>' + out);
        console.log(array);
        return out;
}
