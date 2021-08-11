const got = require('got');

const makeURL = () => 'https://dog.ceo/api/breeds/image/random';

class DogApi {
  async random() {
    const res = await got(makeURL(), {
      responseType: 'json',
    });

    if (!res || !res.body) {
      throw new Error('Invalid response of api.dog.ceo');
    }

    return res.body;
  }
}

module.exports = DogApi;
