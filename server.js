var express = require('express');
var bodyParser = require('body-parser');
var app = express()

app.use(express.static('https://dacd23.github.io/chatty-chat.NODE.JS/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//var messages = []

app.get('https://dacd23.github.io/chatty-chat.NODE.JS/', (req, res) => {
    res.send(messages)
    console.log('sent message')
})

var server = app.listen('https://dacd23.github.io/chatty-chat.NODE.JS/', () => {
    console.log('server is listening on port', server.address().port)
})

