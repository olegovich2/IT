const form = document.getElementById('forma');
const formFileds = form.elements;
const submitBtn = form.querySelector('[type="submit"]');
submitBtn.addEventListener('click', clearStorage);

values = {};
function retriveFormValue(event) {
    event.preventDefault();
    const name = form.querySelector('[name="name"]'),
        phone = form.querySelector('[name="phone"]'),
        email = form.querySelector('[name="email"]'),
        url = form.querySelector('[name="url"]'),
        checkbox = form.querySelector('[name="checkbox"]');
    const values = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        url: url.value,
        checkbox: checkbox.checked
    };
    console.log(values);
    if (values.checkbox === true) {
        localStorage.setItem('test', values.name);
    } else {
        localStorage.setItem('test', 'Гость');
    }
    event.target.reset();
    alert('Ваши данные успешно сохранены');
}
function clearStorage() {
    localStorage.clear();
}
function changeHandler() {
    if (this.type !== 'checkbox') {
        console.log(this.name, this.value);
        localStorage.setItem(this.name, this.value);
    } else {
        console.log(this.name, this.checked);
        localStorage.setItem(this.name, this.checked);
    }
}
function checkStorage() {
    for (let i = 0; i < formFileds.length; i++) {
        if (formFileds[i].type !== 'submit') {
            if (formFileds[i].type !== 'checkbox') {
                formFileds[i].checked = localStorage.getItem(formFileds[i].name)
            } else {
                formFileds[i].value = localStorage.getItem(formFileds[i].name)
            }
        }
    }
    attachEvents();
}
function attachEvents() {
    for (let i = 0; i < formFileds.length; i++) {
        formFileds[i].addEventListener('change', changeHandler);
    }
}
form.addEventListener('submit', retriveFormValue);
checkStorage();


