const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();

bot.once('ready', () => {
  console.log('Bot is live')
})

bot.on('message', msg => {

  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  const words = msg.content.slice(prefix.length).split(/ +/);
  const command = words.shift().toLowerCase();

  if (command === '') {
    msg.reply('');

  } else if (command === 'ping') {
    msg.channel.send('pong');
  }
});

bot.login(config.token);