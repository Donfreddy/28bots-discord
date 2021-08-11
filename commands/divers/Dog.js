const { Command } = require('discord.js-commando');
const DogApi = require('../../api/DogApi');

module.exports = class DogCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'dog',
      memberName: 'dog',
      aliases: ['chien'],
      group: 'divers',
      description: 'Affiche une image aléatoire du chien.',
      guildOnly: true,
      clientPermissions: ['SEND_MESSAGES', 'ATTACH_FILES'], // on vérifie que le bot à la permission 'ATTACH_FILES'
      throttling: {
        usages: 2,
        duration: 10,
      },
    });
  }

  async run(msg) {
    const api = new DogApi();
    const images = await api.random();

    if (!images.length) {
      // si aucun résultat, on arrête là
      return;
    }

    msg.say({
      files: [
        images[0].url, // on affiche le contenu de l'attribut 'url' du premier résultat du tableau 'images'
      ],
    });
  }
};
