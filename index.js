const express = require('express')
const bodyParser = require('body-parser')
const validateForm = require('./formValidator');
const { errors } = require('celebrate');
const app = express()
const port = process.env.PORT || 5000

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

app.post('/api/form', jsonParser, validateForm, function (req, res) {
  const { name, contact, message } = req.body
  const text = `CONTACT FORM \nName: ${name} \nContact: ${contact} \nMessage: ${message}`
  bot.sendMessage(chatId, text).then(() => res.status(200).send('sucess'))
})

app.use(errors());

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
