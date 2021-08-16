const { client } = require('..');

module.exports = {
  /**
   *
   * @param {Error} error
   */
  run: (error) => {
    if (!error) return;

    client.logger.log('error', error.stack ? error.stack : error.toString());
  },
};
