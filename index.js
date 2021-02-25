require('dotenv').config()

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
var twilio = require('twilio');
var client = new twilio(accountSid, authToken); 

const express = require('express')
const app = express()

app.use(require('express-body'));

app.get('/', function (req, res, next) {
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Send me Something</title>
</head>
<body>
    <form action="/new" method="POST">
        <input type="text" name="text" id="text" placeholder="message">
        <input type="text" name="phone" id="phone" placeholder="who should we send it to?">
        <button>Send!</button>
    </form>
</body>
</html>`)
})

app.post('/new', function (req, res, next) {
    client.messages
          .create({body: req.body.text, from: process.env.TWILIO_NUMBER, to: req.body.phone})
          .then(message => console.log(message.sid));

    return res.redirect('/')
})

app.listen(3000, console.log('started'))