const fs = require('fs');
const path = require('path');
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const { SQLiteProvider } = require('discord.js-commando');
const CommandoClient = require('./client');
const config = require('./utils/config');

// Create a new Discord client
const client = new CommandoClient({
  commandPrefix: config.bot.default_prefix,
  owner: config.bot.owner,
  disableMentions: 'everyone',
  // unknownCommandResponse: false,
  // presence: {
  //   activity: {
  //     name: config.bot.activity_text,
  //     type: config.bot.activity_type,
  //   },
  // },
});

// Setting a Database Provider
client
  .setProvider(
    sqlite
      .open({ filename: 'settings.db', driver: sqlite3.Database })
      .then((db) => new SQLiteProvider(db)),
  )
  .catch(console.error);

// Event handling
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const eventFunction = require(`./events/${file}`);
    if (eventFunction.disabled) return;

    const event = eventFunction.event || file.split('.')[0];
    const emitter =
      (typeof eventFunction.emitter === 'string'
        ? client[eventFunction.emitter]
        : eventFunction.emitter) || client;
    const { once } = eventFunction;

    try {
      emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(client, ...args));
    } catch (error) {
      console.error(error.stack);
    }
  });
});

client.registry
  // Registers all built-in groups, commands, and argument types
  .registerDefaultTypes({
    eval: true,
    // prefix: false,
    // commandState: false,
  })

  // Registers your custom command groups
  .registerGroups([
    ['divers', 'Divers Command Group:'],
    ['admin', 'Admin Command Group:'],
    ['bot', 'Bot Command Group:'],
    ['image', 'Image Command Group:'],
    ['music', 'Music Command Group:'],
  ])

  // Registers all of your commands in the ./commands/ directory
  .registerCommandsIn(path.join(__dirname, 'commands'));

// login to Discord with your app's token
client.login(config.bot.token);
