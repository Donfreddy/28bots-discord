const { Command, CommandoMessage, CommandoClient } = require('discord.js-commando');
const stripIndents = require('common-tags').stripIndents;

module.exports = class ReplyCommand extends Command {
  /**
   *
   * @param {CommandoClient} client
   */
  constructor(client) {
    super(client, {
      name: 'user',
      memberName: 'user',
      group: 'divers',
      aliases: ['u', 'me'],
      description: 'Gets information about a user',
      clientPermissions: ['SEND_MESSAGES'],
      examples: ['?user dfreddy'],
      ownerOnly: true,
      throttling: {
        usages: 2,
        duration: 10,
      },
      args: [
        {
          key: 'member',
          label: 'user',
          prompt: 'What user would you like to snoop on?',
          type: 'member',
        },
      ],
    });
  }

  /**
   *
   * @param {CommandoMessage} msg
   // * @param {*} args
   */
  async run(msg, { member }) {
    const user = member.user;
    this.client.logger.log(user);

    msg.reply(stripIndents`
      Info on **${user.username}#${user.discriminator}** (ID: ${user.id})
			**❯ Member Details**
			${member.nickname !== null ? ` • Nickname: ${member.nickname}` : ' • No nickname'}
			 • Roles: ${member.roles.map((roles) => `\`${roles.name}\``).join(', ')}
			 • Joined at: ${member.joinedAt}
			**❯ User Details**
			 • Created at: ${user.createdAt}${user.bot ? '\n • Is a bot account' : ''}
			 • Status: ${user.presence.status}
			 • Game: ${user.presence.game ? user.presence.game.name : 'None'}
    `);
  }
};
