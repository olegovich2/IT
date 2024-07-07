let inputs = document.querySelectorAll('input');
let greeting = document.querySelector('h1');
document.querySelector('button').onclick = function () {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '' || inputs[i].value == null) {
            inputs[i].parentElement.classList.add('error')
        }
    }
    retriveFormValue();
}
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', removeError);
    function removeError() {
        if (inputs[i].value == '' || inputs[i].value == null) {
            inputs[i].parentElement.classList.remove('error')
        }
    }
}
function retriveFormValue() {
    let firstName = document.querySelectorAll('div')[0].children[0].value;
    let lastName = document.querySelectorAll('div')[1].children[0].value;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '' || inputs[i].value == null) {
            greeting.innerHTML = '';
        } else {
            greeting.innerHTML = `Добро пожаловать, ${firstName} ${lastName}!`.toUpperCase();
        }
        console.log(firstName, lastName);
    }
}