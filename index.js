const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token }= require('./config.json');

const bot = new Discord.Client();
bot.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

bot.once('ready', () => {
  console.log('Bot is live')
})

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command)
}




bot.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot || msg.channel.type === 'dm') return;
  
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!bot.commands.has(commandName)) return;
  const command = bot.commands.get(commandName);

  try {
    command.execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.channel.send('Not a valid command');
  }
});

bot.login(token);