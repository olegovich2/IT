const allBlocks = document.querySelector('span');

allBlocks.addEventListener('click', activeBlock);

const text = document.querySelector('.text');
function activeBlock() {
   text.classList.toggle('active');

   if(text.classList.contains('active')) {
    allBlocks.innerHTML = 'свернуть';
   } else {
    allBlocks.innerHTML = 'развернуть';
   }
} 
