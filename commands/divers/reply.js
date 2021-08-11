const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'reply',
      memberName: 'reply',
      group: 'divers',
      description: 'Reply.',
      clientPermissions: ['SEND_MESSAGES'], // le bot doit avoir la permission d'envoyer des messages
      throttling: {
        usages: 2,
        duration: 10,
      },
      args: [
        {
          key: 'text',
          prompt: 'Quel texte voulez-vous que le bot répondre ?',
          type: 'string',
        },
        // Vérifier la taille de la chaîne de caractère
        // {
        //   key: "question",
        //   prompt: "Quelle est la question ?",
        //   type: "string",
        //   validate: (question) => {
        //     if (question.length < 101 && question.length > 11) return true;
        //     return "La question doit avoir au minimum 10 caractères, et maximum 100.";
        //   },
        // },
        // Valider une URL :
        // {
        //   key: "url",
        //   prompt: "Which image url do you want to share?",
        //   type: "string",
        //   validate: (url) => {
        //     return /^(?:(?:(?:https?|http):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        //       url
        //     );
        //   },
        // },
        // Valider une URL du workshop STEAM
        // {
        //   key: "url",
        //   prompt: "Quelle URL du workshop STEAM ?",
        //   type: "string",
        //   validate: (url) => {
        //     return /^https:\/\/steamcommunity.com\/sharedfiles\/filedetails\/\?id=[0-9]{2,15}(&.+)?$/i.test(
        //       url
        //     );
        //   },
        // },
      ],
    });
  }

  async run(msg, { text }) {
    msg.say(`Votre texte est: ${text}`);
  }
};
