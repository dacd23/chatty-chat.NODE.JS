var express = require('express');
var bodyParser = require('body-parser');
var app = express()

app.use(express.static('https://dacd23.github.io/chatty-chat.NODE.JS/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name: 'tim', message: 'hi'},  
    {name: 'timdd', message: 'hheiei'}
]

app.get('https://dacd23.github.io/chatty-chat.NODE.JS/', (req, res) => {
    res.send(messages)
    console.log('sent message')
})
//post message
app.post('https://dacd23.github.io/chatty-chat.NODE.JS/', (req, res) => {
    messages.push(req.body)
    console.log('message posted')
})

var server = app.listen('https://dacd23.github.io/chatty-chat.NODE.JS/', () => {
    console.log('server is listening on port', server.address().port)
})

