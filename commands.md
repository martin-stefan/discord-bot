Display users avatar: msg.author.displayAvatarURL()
Display users id: msg.author.id

Sending attachment: new MessageAttachment('https://i.imgur.com/w3duR07.png')
  Must import or use Discord.MessageAttachment


Make embedded message: 
  const embed = new Discord.MessageEmbed()
        // Set the title of the field
        .setTitle('A slick little embed')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('Hello, this is a slick embed!');
      // Send the embed to the same channel as the message
      msg.channel.send(embed);



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