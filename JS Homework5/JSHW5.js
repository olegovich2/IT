let input = document.querySelector('input');
let hh = document.querySelector('.section1').children[0];
let nextWord = document.querySelector('.section2').children[0];
const array = [];
document.querySelector('button').onclick = function () {
    if (input.value == '' || input.value == null) {
        input.parentElement.classList.add('error')
    }
    arrayInspector();
}

input.addEventListener('focus', removeError);
function removeError() {
    if (input.value == '' || input.value == null) {
        input.parentElement.classList.remove('error')
    }
}
function arrayInspector() {
    let firstName = document.querySelector('div').children[0].value;
    if (array.length > 0) {
        let answer = litInspector();
        if (array.includes(firstName.toLowerCase()) == false) {
            str = firstName.toLowerCase().split('');
            if (str[0] == answer) {
                hh.innerHTML = 'Новое слово';
            arrayPush();
            } else {
                nextWord.innerHTML = `Нужно ввести слово на ${answer}`;
            }
        } else {
            hh.innerHTML = 'Такое слово уже есть';
        }
    } else {
        if (array.includes(firstName.toLowerCase()) == false) {
            hh.innerHTML = 'Новое слово';
            arrayPush();
        } else {
            hh.innerHTML = 'Такое слово уже есть';
        }
    }
}
function arrayPush() {
    if (input.value == '' || input.value == null) {
    } else {
        let firstName = document.querySelector('div').children[0].value;

        if (array.length % 2 == 0) {
            array.push(firstName.toLowerCase());
            const li = document.createElement('li');
            li.textContent = `${firstName}`;
            document.querySelector('.ul1').appendChild(li);
            input.value = '';
        } else {
            array.push(firstName.toLowerCase());
            const li = document.createElement('li');
            li.textContent = `${firstName}`;
            document.querySelector('.ul2').appendChild(li);
            input.value = '';
        }
    }
    litInspector();
}
function litInspector() {
    let str = array[array.length-1].split('');
    if (str[str.length-1] == 'ы' || str[str.length-1] == 'ь' || str[str.length-1] == 'ъ' || str[str.length-1] == 'й')  {
        str1 = str[str.length-2];
        nextWord.innerHTML = `Следующее слово на ${str1}`;
    } else {
        str1 = str[str.length-1];
        nextWord.innerHTML = `Следующее слово на ${str1}`;
    }
    return str1;
}