const modalOverlay = document.querySelector('.modalOverlay')
const cards = document.querySelectorAll('.card')
const maximModal = document.querySelector('.maxim-modal')
const modal = document.querySelector(".modal")

for( let card of cards){
    card.addEventListener("click", function(){
        const idIframe = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${idIframe}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modal.classList.remove('up')
    maximModal.classList.remove('up')
    modalOverlay.querySelector("iframe").src = ""
})

maximModal.addEventListener("click", function(){

    if(modal.classList.contains("up") === false){
        modal.classList.add('up')
        maximModal.classList.add('up')
    }else if(modal.classList.contains('up') === true){
        modal.classList.remove('up')
        maximModal.classList.remove('up')    
    }
})
