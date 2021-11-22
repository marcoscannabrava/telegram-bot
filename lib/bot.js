
import TelegramBot from 'node-telegram-bot-api'
import app from '../app.js'
import TelegramApi  from './telegram-api/api.js';
const TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const url = process.env.PUBLIC_URL;

export default function setupBot() {
  const bot = new TelegramBot(TOKEN);
  bot.setWebHook(`${url}/bot${TOKEN}`);
  
  app.post(`/bot${TOKEN}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
  
  bot.on('message', msg => {
    const words = msg.text.split(' ')
    if (words[0] == 'msg') {
      if (words[1].match(/\d{11}/)) {
        console.log('match: ', words[1]);
        const api = new TelegramApi()
        (async () => console.log(await api.user))()
        
        // api.call('messages.createChat', )
      } else {
        bot.sendMessage(msg.chat.id, `Please use 11-digit number format 21991234567 (areacode+cell)`);
      }
    } else {
      bot.sendMessage(msg.chat.id, `Type msg <PHONE_NUMBER> to start a chat with them. (Jan, pls make sure it's someone willing to get a text from us 😅)`);
    }
  });
}
