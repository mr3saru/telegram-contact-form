const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const token = process.env.TOKEN;
const chatId = process.env.CHAT_ID;

const Bot = require('node-telegram-bot-api');

let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.PRODUCTION_URL + bot.token);
}
else {
  const opt = { polling:true };
  bot = new Bot(token, opt);
}

const jsonParser = bodyParser.json()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/contact', jsonParser, function (req, res) {
  const { name, email, message } = req.body
  res.send('Got a POST request')
  const text = `**CONTACT FORM** \nName: ${name} \nEmail: ${email} \nMessage: ${message}`
    bot.sendMessage(chatId, text).then(() => {
      res.sendStatus(200);
    });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})