const config = require('../config.json');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
  usage: '[command name]',
	cooldown: 5,
	execute(msg, args) {
		msg.channel.send('you dont get to know');
	},
};