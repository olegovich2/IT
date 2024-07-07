document.querySelectorAll('.navbar__search__button').forEach(button=>{
    button.addEventListener('click', function (event) {
        console.log('нажал');
        event.isClick = true;
        button.parentElement.classList.toggle('button_open');
    })
})
document.body.addEventListener('click', function (event) {
    if (
        event.isClick == true || 
        event.target.classList.contains('navbar__search__button') == true ||
        event.target.classList.contains('navbar__search__input') == true
        ) return;
    document.querySelectorAll('.form__style').forEach(item=>{
        item.classList.remove('button_open');
})

})