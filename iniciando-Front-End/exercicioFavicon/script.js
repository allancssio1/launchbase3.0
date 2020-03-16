const modalOverlay = document.querySelector('.modalOverlay')
const cards = document.querySelectorAll('.card')
const maximModal = document.querySelector('.maxim-modal')
const modal = document.querySelector(".modal")

for( let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

maximModal.addEventListener("click", function(){

    if(maximModal.contains("up") == false){
        modal.classList.add("up")
        maximModal.classList.add("up")
    }else if(maximModal.contains(".up") == true){
        modal.classList.remove("up")
        maximModal.classList.remove("up")
    }

})