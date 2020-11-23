const { DiscordAPIError, Channel } = require("discord.js")

const Discord = require('discord.js');

module.exports = {
  name: 'speed',
  description: 'sends gif of lightning mcqueen',
  execute(msg, args) {
    const embed = new Discord.MessageEmbed()
      .setImage('https://tenor.com/view/speed-iam-speed-lightning-mcqueen-cars-meme-gif-14031708');
    
    msg.channel.send(embed);
  }
}
