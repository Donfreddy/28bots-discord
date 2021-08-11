const { bot } = require('../config.json');

module.exports = {
  run: (client) => {
    client.logger.log('info', `Bot identifié en tant que ${client.user.tag}! (${client.user.id})`);

    const updateActivity = () => {
      client.user.setActivity(bot.activity_text, { type: bot.activity_type });
    };

    updateActivity();

    // toutes les 5 min après le lancement du bot
    client.setInterval(() => updateActivity(), 5000 * 60);
  },
};
