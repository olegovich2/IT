// let count = 0
// let count1 = 0
// for (let i = 0; i < 10; i++) {
// random = Math.floor(Math.random() * 3 + 1)
// random1 = Math.floor(Math.random() * 3 + 1)
// if (random === 1 && random1 === 1) {
//     count++
// }  else if (random === 2 && random1 === 2) {
//     count++
// } else if (random === 3 && random1 === 3) {
//     count++
// } else if (random > random1) {
//     count1++
// } else if (random < random1) {
//     count1++ 
// }

// console.log(count, 'Сравнялись');
// console.log(count1, 'Разные величины');
// // const element = array[i];
// console.log(random);
// console.log(random1);    
// }
// console.log(count, 'Сравнялись1!');
// console.log(count1, 'Разные величины1!');
let count = 0
let count1 = 0
for (let i = 0; i < 10; i++) {
random = Math.floor(Math.random() * 3 + 1)
random1 = Math.floor(Math.random() * 3 + 1)
while ((random === 1 && random1 === 1) || (random === 2 && random1 === 2) || (random === 3 && random1 === 3)) {
    count++    
    break;
}
while ((random > random1) || (random < random1)) {
    count1++
    break;
}
// while ([random > random1] || [random < random1]) {
//     count1++
//     break;
// }
// if (random === 1 && random1 === 1) {
//     count++
// }  else if (random === 2 && random1 === 2) {
//     count++
// } else if (random === 3 && random1 === 3) {
//     count++
// } else if (random > random1) {
//     count1++
// } else if (random < random1) {
//     count1++ 
// }

console.log(count, 'Сравнялись');
console.log(count1, 'Разные величины');
// const element = array[i];
console.log(random);
console.log(random1);    
}
console.log(count, 'Сравнялись1!');
console.log(count1, 'Разные величины1!');