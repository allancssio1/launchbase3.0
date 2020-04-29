const cards = document.querySelectorAll('.card')

for(let i = 0; i < cards.length; i++){
    (function(idCard){
        cards[i].onclick = function(){
            window.location.href = `/curso/${idCard}`
        }
    })(i)
}