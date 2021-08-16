const { CommandoMessage } = require('discord.js-commando');
const { client } = require('..');

module.exports = {
  /**
   *
   * @param {CommandoMessage} message
   */
  run: (message) => {
    client.logger.log('info', 'Je vien du fichier message');

    // if (message.author.bot) return;

    // if (!message.content.startsWith('?')) return;

    return;
  },
};
