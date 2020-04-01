const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/about", function(require, response){
    return response.render("about")
})
server.get("/portifolio", function(require, response){
    return response.render("portifolio", {itens: videos})
})

server.listen(5000, function(){
    console.log('servidor está rodando / server is running')
})