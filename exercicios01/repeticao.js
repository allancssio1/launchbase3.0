const usuarios = [
    {
        nome: "Carlos",
        tecnologia: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologia: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologia: ["HTML", "Node.js"]
    }
]

for(let contador = 0; contador < usuarios.length; contador++){
    console.log(`${usuarios[contador].nome} tabalha com ${usuarios[contador].tecnologia[0]}, ${usuarios[contador].tecnologia[1]}.`)
}