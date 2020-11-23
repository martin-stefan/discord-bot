const { Message } = require("discord.js")

module.exports = {
  name: 'answer', 
  description: 'Bot helps to persuade someone into answering your message',
  args: true, 
  usage: '<user> <# of pings>',
  execute(msg, args) {

    if (args[1] <= 10) {
      for (let i = 0; i < args[1]; i++) {
        msg.channel.send(`${args[0]}, it would be nice if you answered ${msg.author}`);
      }

    } else {
      msg.channel.send('why must you be annoying');
    }
  },
}