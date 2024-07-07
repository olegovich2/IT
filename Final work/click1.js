document.querySelectorAll('.navbar__menu').forEach(button=>{
    button.addEventListener('click', function (event) {
        event.isClick = true;
        button.parentElement.classList.toggle('menu__item_open');
    })
})
document.body.addEventListener('click', function (event) {
    if (
        event.isClick == true || 
        event.target.classList.contains('navbar__menu') == true ||
        event.target.classList.contains('dropdown__menu') == true
        ) return;
    document.querySelectorAll('.menu__item').forEach(item=>{
        item.classList.remove('menu__item_open');
})

})