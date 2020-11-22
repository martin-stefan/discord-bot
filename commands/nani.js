const { Message } = require("discord.js")

module.exports = {
  name: 'nani',
  description: 'idk',
  execute(msg, args) {
    return msg.reply('what do you want');
  },
};