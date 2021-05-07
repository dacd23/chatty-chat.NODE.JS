var express = require('express');
var bodyParser = require('body-parser');
var app = express()

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name: 'tim', message: 'hi'},  
    {name: 'timdd', message: 'hheiei'}
]

app.get('/messages', (req, res) => {
    res.send(messages)
    console.log('sent message')
})
//post message
app.post('/messages', (req, res) => {
    messages.push(req.body)
    console.log('message posted')
})

var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})

