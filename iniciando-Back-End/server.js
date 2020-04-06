const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/about", function(request, response){
    const about = {
        avatarUrl: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        name: "Mayk Brito",
        role: "FullStack Developer",
        description: 'Instrutor na <a href="https://rocketseat.com.br/" target="_blanck">&copy;Rocketseat</a> e colaborador na comunidade JavaScript.',
        links: [
            {name: "GitHub", url: "https://github.com/maykbrito"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/maykbrito/"},
            {name: "Twitter", url: "https://twitter.com/maykbrito"}
        ]
    }

    return response.render("about", {about})
})
server.get("/portifolio", function(request, response){
    return response.render("portifolio", {itens: videos})
})

server.listen(5000, function(){
    console.log('servidor está rodando / server is running')
})