const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))
server.use(express.static("img"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/index", function(request, response){
    const index = {
        headers: [
            {name: "Home", url: "/index"},
            {name: "Conteúdo", url: "/conteudo"},
            {name: "Comunidade", url: "https://discordapp.com/invite/gCRAFhc"},
            {name: "E-mail", url: "oi@rocketseat.com.br"},
            {name: "Telefone", url: "+5547992078767"},
            {name: "Sobre", url: "https://rocketseat.com.br/"}
        ],
        footers: [
            {name: "GitHub", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat/"}
        ]
    }
    return response.render("index", {index})
})

server.get("/conteudo", function(request, response){
    return response.render("conteudo")
})

server.listen(5000, function(){
    console.log("server is runnig")
})