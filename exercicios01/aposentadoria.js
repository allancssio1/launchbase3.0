const nome = 'Allan'
const sexo = "F"
const idade = 65
const contribuicao = 25

if(sexo == 'M'){
    if((idade+contribuicao) >= 95){
        console.log(`${nome}, você já pode se aposentar.`)
    }else{
        console.log(`${nome}, você ainda não pode se aposentar.`)
    }
}else if(sexo == 'F'){
    if((idade+contribuicao) >= 85){
        console.log(`${nome}, você ja pode se aposentar.`)
    }else{
        console.log(`${nome}, você ainda não pode se aposentar.`)
    }
}else{
    console.log('digite "M" para masculino ou "F" para feminino')
}