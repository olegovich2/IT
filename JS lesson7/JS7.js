// task1
// console.log(document.querySelector('h3'));
// console.log(document.querySelector('p'));
// console.log(document.querySelector('ol').children[1].lastElementChild.lastElementChild.textContent);
// console.log(document.querySelectorAll('#latvian ~ li')[1].textContent);
// console.log(document.querySelectorAll('li:last-of-type')[3].textContent);
// task2(style)
// console.log(document.querySelectorAll('li:last-of-type')[3].style.color = 'red');
// console.log(document.querySelectorAll('body')[0].style.background = 'grey');
// let liElement = document.querySelectorAll('#languages li');
// for (let i = 0; i < liElement.length; i++) {
//     liElement[i].style.color = 'white';
// }
// task3
// function lightTheme() {
//     document.body.children[4].classList.add('white-theme');
//     document.body.children[4].classList.remove('black-theme');
// }
// function darkTheme() {
// document.body.children[4].classList.add('black-theme');
// document.body.children[4].classList.remove('white-theme');
// }
document.getElementById('button').onclick = function() {
    
        document.body.children[2].classList.toggle('white-theme');
        document.body.children[2].classList.toggle('black-theme');
   
}
// function changeTheme() {
//     document.body.children[4].classList.toggle('white-theme');
//     document.body.children[4].classList.toggle('black-theme');
// }