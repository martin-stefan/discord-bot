module.exports = {
  name: 'roll',
  description: 'yanno',
  execute(msg, args) {
    if (args[1] <= 5) {
      for (let i = 0; i < args[1]; i++) {
        msg.channel.send(`${args[0]}, roll`);
      
      }


    } else {
      msg.channel.send('why must you be annoying');
    }
  },
}