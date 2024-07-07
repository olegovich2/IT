let input = document.querySelector('input');
input.addEventListener('keypress', addListItem);
function addListItem(event) {
   if (event.key == 'Enter') {
    if (input.value == '' || input.value == null) {
        document.querySelector('.error-message').classList.add('active');
    } else {
    const li = document.createElement('li');
    li.textContent = input.value;
    document.querySelector('.error-message').classList.remove('active');
    document.querySelector('ul').appendChild(li);
    input.value = '';
}
   }
} 