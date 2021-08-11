const { CommandoClient } = require('discord.js-commando');
const winston = require('winston');

module.exports = class BotClient extends CommandoClient {
  constructor(options) {
    super(options);

    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'console.log' }),
      ],
      format: winston.format.printf(
        (log) => `[${new Date().toLocaleString()}] - [${log.level.toUpperCase()}] - ${log.message}`,
      ),
    });

    this.on('debug', (msg) => this.logger.log('debug', msg));
    this.on('warn', (msg) => this.logger.log('warn', msg));
    this.on('error', (msg) => this.logger.log('error', msg));

    this.on('disconnect', () => this.logger.log('Disconnected!'));
    this.on('reconnecting', () => this.logger.log('Reconnecting...'));
    this.on('commandError', (cmd, err) =>
      this.logger.log(`Error in command ${cmd.groupID}:${cmd.memberName}`, err),
    );

    this.on('commandPrefixChange', (guild, prefix) =>
      this.logger.log(
        `Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`} ${
          guild ? `in guild ${guild.name} (${guild.id})` : 'globally'
        }.`,
      ),
    );

    this.on('commandStatusChange', (guild, command, enabled) =>
      this.logger.log(
        `Command ${command.groupID}:${command.memberName} ${enabled ? 'enabled' : 'disabled'} ${
          guild ? `in guild ${guild.name} (${guild.id})` : 'globally'
        }.`,
      ),
    );

    this.on('groupStatusChange', (guild, group, enabled) =>
      this.logger.log(
        `Group ${group.id} ${enabled ? 'enabled' : 'disabled'} ${
          guild ? `in guild ${guild.name} (${guild.id})` : 'globally'
        }.`,
      ),
    );
  }
};
