const { Command, CommandoMessage } = require('discord.js-commando');
// https://github.com/discordjs/Commando/blob/master/test/commands/util/user-info.js

module.exports = class CreateChannelCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'create-channel',
      aliases: ['create-chan', 'add-channel', 'add-chan'],
      group: 'divers',
      memberName: 'create-channel',
      description: 'Creates a channel.',
      examples: ['create-channel Test channel'],
      guildOnly: true,
      clientPermissions: ['MANAGE_CHANNELS'],
      userPermissions: ['MANAGE_CHANNELS'],

      args: [
        {
          key: 'type',
          label: 'channel type',
          prompt: 'Quel texte voulez-vous que le bot répondre ?',
          type: 'string',
          validate: (val) => ['text', 'voice', 'store', 'news', 'category'].includes(val),
        },
        {
          key: 'name',
          label: 'channel name',
          prompt: 'What would you like the channel to be called?',
          type: 'string',
        },
      ],
    });
  }

  /**
   *
   * @param {CommandoMessage} msg
   */
  async run(msg, { name, type }) {
    const channel = await msg.guild.channels.create(name, { type: type });
    return msg.reply(`Created ${channel} (${channel.id})`);
  }
};
