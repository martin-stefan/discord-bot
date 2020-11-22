const Discord = require('discord.js');
const {prefix, token }= require('./config.json');
const bot = new Discord.Client();

bot.once('ready', () => {
  console.log('Bot is live')
})

bot.on('message', msg => {

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '') {
    msg.reply('');

  } else if (command === 'ping') {
    msg.channel.send('pong');
  } else if (command == 'id') {
    msg.channel.send(`Your id is: ${msg.author.id}`);
  }
});

bot.login(token);