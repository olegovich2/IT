const allBlocks = document.querySelectorAll('div');
 for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].addEventListener('click', activeBlock)
    
 }
 const cat = document.body.children[2].children[1];
function activeBlock(event) {
    console.log(event.target.parentElement.dataset.id);
    const currentBlockId = event.target.parentElement.dataset.id;
        for (let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].classList.remove('active')
        
    }
    allBlocks[currentBlockId-1].classList.add('active');
    if(allBlocks[currentBlockId-1].classList.contains('active')) {
        cat.innerHTML = `<strong>Кошка</strong>, или домашняя кошка <em>(лат. Felis silvestris catus)</em>, —
        домашнее животное, одно из наиболее популярных(наряду с собакой)
         «животных-компаньонов». Являясь одиночным охотником на грызунов 
         и других мелких животных, кошка — социальное животное, использующее 
         для общения широкий диапазон звуковых сигналов.`
       } else {
        cat.innerHTML = `Кошка, или домашняя кошка (лат. Felis silvestris catus), —
        домашнее животное, одно из наиболее популярных(наряду с собакой)
         «животных-компаньонов». Являясь одиночным охотником на грызунов 
         и других мелких животных, кошка — социальное животное, использующее 
         для общения широкий диапазон звуковых сигналов.`
       }
} 

document.addEventListener('click', outsideDocument);

function outsideDocument(event) {
    for (let i = 0; i < allBlocks.length; i++) {
        if (event.target === allBlocks[i] || allBlocks[i].contains(event.target)) {
            continue;
        }
        allBlocks[i].classList.remove('active')
    }
}



