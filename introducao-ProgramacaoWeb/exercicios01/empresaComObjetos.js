const usuario = {
    nome: "Allan",
    empresa: {
        nome: "Rocketseat",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        },
        foco: "Programação"
    }
}
console.log(`A empresa ${usuario.empresa.nome}, está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}.`)