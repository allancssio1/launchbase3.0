const alunosDaTurmaA = [
    {
        nome: "Allan",
        nota:9,
    },
    {
        nome: "Felipe",
        nota: 5
    },
    {
        nome: "Ellen",
        nota: 7.5
    }
]

const alunosDaTurmaB = [
    {
        nome: "Camilo",
        nota:8,
    },
    {
        nome: "Junior",
        nota: 5
    },
    {
        nome: "Rafael",
        nota: 4
    }
]

function calculoDaMédia(alunos){
    let soma = 0
    for(let contador = 0; contador < alunos.length; contador++){
        soma = soma +alunos[contador].nota
    }

    return media = soma / alunos.length
}

const media1 = calculoDaMédia(alunosDaTurmaA)
const media2 = calculoDaMédia(alunosDaTurmaB)

function enviarMensagem(media, turma){
    if(media > 6){
        console.log(`a média da ${turma} foi de ${media}. Passaram.`)
    }else{
        console.log(`A médiada ${turma} foi ${media}. Não foi dessa vez!`)
    }
}

enviarMensagem(media1, "turna A")
enviarMensagem(media2, "turma B")
