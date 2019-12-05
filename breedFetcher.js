const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let idName = breedName.toLowerCase().slice(0, 4);
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${idName}`

  request(url, (error, response, body) => {

    const data = JSON.parse(body);
      if (error) return callback(error);
      if (data.length === 0) {
        callback('That breed name does not exist')
        return;
      }
      callback(null, data[0].description);
  })
};

module.exports =  { fetchBreedDescription };