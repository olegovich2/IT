document.querySelectorAll('.open_button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.isClick = true;
        button.parentElement.classList.add('card-orientation_active');
        button.classList.add('close');
        button.parentElement.lastElementChild.classList.remove('close');
        button.parentElement.firstElementChild.lastElementChild.classList.remove('close');
    })
})
document.querySelectorAll('.close_button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.isClick = true;
        button.parentElement.classList.remove('card-orientation_active');
        button.parentElement.children[1].classList.remove('close');
        button.parentElement.lastElementChild.classList.add('close');
        button.parentElement.firstElementChild.lastElementChild.classList.add('close');
    })
})