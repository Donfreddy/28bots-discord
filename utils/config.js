require('dotenv').config();

const config = require('../config.json');

// Set environment variable TOKEN
config.bot.token = process.env.BOT_TOKEN || '';
config.youtube.token = process.env.YOUTUBE_TOKEN || '';

module.exports = config;
