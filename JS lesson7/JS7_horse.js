// (работает на одном диве)
// document.querySelector('div').onclick = function() {
//     // document.body.querySelector('div').classList.add('active');
//     document.body.querySelector('div').classList.toggle('active');
// }
// (работает на всех)
const allBlocks = document.querySelectorAll('div');
 for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].addEventListener('click', activeBlock)
    
 }

function activeBlock(event) {
    console.log(event.target.parentElement.dataset.id);
    const currentBlockId = event.target.parentElement.dataset.id;
        for (let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].classList.remove('active')
        
    }
    allBlocks[currentBlockId-1].classList.add('active');
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