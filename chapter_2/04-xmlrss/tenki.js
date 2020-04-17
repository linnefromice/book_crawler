const rss_url = 'https://rss-weather.yahoo.co.jp/rss/days/13.xml';

const parseString = require('xml2js').parseString;
const request = require('request');

const analyzeRss = (xml) => {
  parseString(xml, (err, obj) => {
    if (err) {
      console.log(err);
      return;
    }
    const items = obj.rss.channel[0].item;
    items.forEach(item => {
      console.log(item.title[0]);
    });
  })
}

const main = () => {
  request(rss_url, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      analyzeRss(body);
    }
  })
}

main();