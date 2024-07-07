// arr.map(function(element, index, arr){...});
// arr.map((element, index, arr) => {...});
// arr.find((element) => element > 10);
// array.filter((element) => element > 10);
// task1
// const array = [-3, -2, -1, 1, 2, 3, 4, 5];
// let newArr = [];
// newArr = array.map((element, index, arr) => {
// return `element=${element} index=${index} in array=${arr}`;
// });
// console.log(newArr);
// task2
// const array = ['Vlad', 'Mihail', 'Lora', 'Abram'];
// let newArr = [];
// let object = [];
// newArr = array.map((element, index) => {
//     return `${index}-${element}`;
// });
// console.log(newArr);
// object = array.map((element, index) => {
//     return {
//         id: index,
//         name: element
//     };
// });
// console.log(object);
// arr = array.find((element) =>  element == 'Laaa');
// console.log(arr);
// arr1 = array.filter((element) =>  element.length > 4);
// console.log(arr1);
// task3
// let object = [
// {id: 0, name: 'Vlad'},
// {id: 1, name: 'Mihail'},
// {id: 2, name: 'Lora'},
// {id: 3, name: 'Abram'}
// ];
// arr1 = object.filter((element) =>  element['name'].length > 4);
// console.log(arr1);
// task4
// let object = [
//     {
//         id: '1',
//         name: 'Leggings',
//         price: 5
//     },
//     {
//         id: '2',
//         name: 'Cardigan',
//         price: 49.9
//     },
//     {
//         id: '4',
//         name: 'Dressing gown',
//         price: 55
//     },
//     {
//         id: '11',
//         name: 'Dress',
//         price: 70.9
//     },
//     {
//         id: '33',
//         name: 'Jacket',
//         price: 86.7
//     },
//     {
//         id: '8',
//         name: 'Coat',
//         price: 99.9
//     },
// ];
// let id = 13;
// let nam = 'Coat';
// let redPrice = 55;
// arr = object.find((element) => element['id'] == id);
// if (!arr) {
//     console.log('Ничего не найдено');
// } else {
//     console.log(arr);
// }
// arr1 = object.find((element) => element['name'] == nam);
// if (!arr1) {
//     console.log('Ничего не найдено');
// } else {
//     console.log(arr1);
// }
// arr2 = object.filter((element) => element['price'] <= redPrice);
// if (arr2.length == 0) {
//     console.log('Ничего не найдено');
// } else {
//     console.log(arr2);
// }
// task5
// const shopList = {
//     '09360374': {
//         name: 'Cardigan',
//         price: 49.90
//     },
//     '02929990': {
//         name: 'Coat',
//         price: 99.90
//     },
//     '01827744': {
//         name: 'Dressing gown',
//         price: 55.00
//     },
//     '18288828': {
//         name: 'Dress',
//         price: 70.90
//     },
//     '08093063': {
//         name: 'Jacket',
//         price: 86.70
//     },
//     '09282888': {
//         name: 'Leggings',
//         price: 5.00
//     }
// };
// let arrName = [];
// let arrPrice = [];
// let newArr = [];
// for (const key in shopList) {
//     arrName.push(shopList[key].name);
// }
// function compareName(a, b) {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
// }    
// arrName.sort(compareName);
// for (const key in shopList) {
//     arrPrice.push(shopList[key].price);
// }
// function comparePrice(a, b) {
//     return a - b;
// }    
// arrPrice.sort(comparePrice);
// arrPrice.forEach((element) => {
//     for (key in shopList) {
//        if(element == shopList[key].price) {
//         newArr.push(shopList[key]);
//     }    
//     }
// });
// console.log(arrName);
// console.log(arrPrice);
// console.log(newArr); 
// task6

