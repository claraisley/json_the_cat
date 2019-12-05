const request = require('request');

let breed = process.argv[2];
let idName = breed.toLowerCase().slice(0, 4);
let url = `https://api.thecatapi.com/v1/breeds/search?q=${idName}`



const breedFetcher = function(url, breed) {

  request(url, (error, response, body) => {

    const data = JSON.parse(body);
      if (error) throw errror;
      if (data.length === 0) {
        console.log('That breed name does not exist')
        return;
      }
      console.log(data[0].description);


    
  })
}

breedFetcher(url, breed)