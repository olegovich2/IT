let  checkbox1 = document.querySelector('input[name="only-5"]');
let  checkbox2 = document.querySelector('input[name="only-bel"]');
let  checkbox3 = document.querySelector('input[name="parking"]');
let  checkbox4 = document.querySelector('input[name="pool"]');
let not = document.querySelectorAll('.card:not(.only-5)');
let notZ = document.querySelectorAll('.card:not(.only-bel)');
let notP = document.querySelectorAll('.card:not(.parking)');
let notPool = document.querySelectorAll('.card:not(.pool)');
checkbox1.addEventListener('change', (event) => {
        if (event.target.checked == true) {
            not.forEach(element => {
                    element.classList.add('block');
                });
        } else {
            not.forEach(element => {
                element.classList.remove('block');
            });
        }
});
checkbox2.addEventListener('change', (event) => {
    if (event.target.checked == true) {
        notZ.forEach(element => {
                element.classList.add('block');
            });
    } else {
        notZ.forEach(element => {
            element.classList.remove('block');
        });
    }
});
checkbox3.addEventListener('change', (event) => {
    if (event.target.checked == true) {
        notP.forEach(element => {
                element.classList.add('block');
            });
    } else {
        notP.forEach(element => {
            element.classList.remove('block');
        });
    }
});
checkbox4.addEventListener('change', (event) => {
    if (event.target.checked == true) {
        notPool.forEach(element => {
                element.classList.add('block');
            });
    } else {
        notPool.forEach(element => {
            element.classList.remove('block');
        });
    }
});