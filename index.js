const Discord = require('discord.js');

const bot = new Discord.Client();

const token = '';

const prefix = '*';

bot.on('message', msg => {

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const words = msg.content.slice(prefix.length).split(/ +/);
  const command = words.shift().toLowerCase();

  if (command === '') {
    msg.reply('');

  } else if (command === 'ping') {
    msg.channel.send('pong');
  } else {
    msg.reply('');
  }
});

bot.login(token);