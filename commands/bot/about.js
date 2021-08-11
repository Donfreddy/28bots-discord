const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

const icon = require('../../utils/icons');

module.exports = class WhoMadeMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'about',
      aliases: ['botinfo', 'whomademe', 'bot-maker', 'bot-creator'],
      memberName: 'about',
      group: 'bot',
      description: 'En savoir plus sur le bot et son créateur !',
    });
  }

  async run(msg) {
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Réalisé par **@dfreddy#0728** avec ${icon.heart}, le code complet est disponible sur [GitHub](https://github.com/Donfreddy)`,
      )
      .setColor('GREEN');
    return msg.say(embed);
  }
};
