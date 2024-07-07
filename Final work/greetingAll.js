window.addEventListener('load', () => {
        const div = document.querySelector('.hello');
        let p = document.createElement('h1');
        p.classList.add('h1');
        let answer = localStorage.getItem('test');
        if (answer == null) {
                p.textContent = `Добро пожаловать, Гость!`;
                div.appendChild(p);
        } else {
                p.textContent = `Добро пожаловать, ${answer}!`;
                div.appendChild(p);
        }
})