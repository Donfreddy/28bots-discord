const { CommandoGuild } = require('discord.js-commando');
const { client } = require('..');

module.exports = {
  /**
   *
   * @param {CommandoGuild} member
   */
  run: (member) => {
    client.logger.log('Wellcome'+ member.displayName);
    if (member) return;

    return;
  },
};
