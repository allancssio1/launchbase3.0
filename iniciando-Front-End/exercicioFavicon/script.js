const modalOverlay = document.querySelector('.modalOverlay')
const cards = document.querySelectorAll('.card')

for( let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}

document.querySelector('close-modal').addEventListener("click", functio(){
    modalOverlay.classList.remove('active')
})