const usuario = {
    nome: "Allan",
    idade: 29,
    empresa: {
        nome: "Rocketseat",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        },
        foco: "Programação"
    }
}

const objeto = {
    propriedade: [
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "JavaScript",
            especialidade: "Web/Mobile"
        }
    ]
}

console.log(`
O estudante ${usuario.nome} tem ${usuario.idade} anos,
é estudade de ${usuario.foco}. Por isso ele estuda
${objeto.propriedade[1].nome} que foca em
${objeto.propriedade[1].especialidade}.
`)