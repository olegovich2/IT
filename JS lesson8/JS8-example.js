document.querySelector('#create-p').onclick = function () {
    let parent = document.querySelector('#parent');
    let p = document.createElement('p');
    let count = document.querySelector('#parent').children.length;
    p.textContent = `${count + 1}`;
    parent.appendChild(p);
}