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
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
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


/*const a = 1
const b = 2
const c = 3
const d = 4
const e = 5

function soma(x, y){
    return x + y
}

console.log(soma(a, b))
console.log(soma(d, e))
console.log(soma(a, c))
console.log(soma(e, b))*/