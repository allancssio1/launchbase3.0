const cards = document.querySelectorAll('.card')

for( let card of cards){
    card.addEventListener("click", function(){
        card.querySelector("span").link = `https://rocketseat.com.br/${idIframe}`
    })
}
