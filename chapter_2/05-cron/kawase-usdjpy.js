const request = require('request');

const api_url = "https://www.gaitameonline.com/rateaj/getrate";

const main = () => {
  request(api_url, (err, response, body) => {
    if (err || response.statusCode != 200) {
      console.log(`ERROR: ${err}`);
      return;
    }
    const data = JSON.parse(body);
    console.log(data.quotes.length);
    data.quotes.forEach(element => {
      if (element.currencyPairCode == 'USDJPY') {
        console.log(element);
        return;
      }
    });
  });
}

main();