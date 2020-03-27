const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(require, response){
    return response.send('index')
})
server.get("/classes", function(require, response){
    return response.render("classes")
})

server.listen(5000, function(){
    console.log('servidor está rodando / server is running')
})