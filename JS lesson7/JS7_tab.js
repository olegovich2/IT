const allBlocks = document.querySelectorAll('li');
for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].addEventListener('click', activeBlock);
}

const allBlocks1 = document.querySelectorAll('.tab');
for (let i = 0; i < allBlocks1.length; i++) {
    allBlocks1[i].addEventListener('click', activeBlock);
}

function activeBlock(event) {
    const currentBlockId = event.target.dataset.id;
    for (let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].classList.remove('active');
        allBlocks1[i].classList.remove('active');
    }
    allBlocks[currentBlockId - 1].classList.add('active');
    allBlocks1[currentBlockId - 1].classList.add('active');
} 