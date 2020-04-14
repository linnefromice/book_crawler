const client = require('cheerio-httpcli');

const url = "https://www.aozora.gr.jp/index_pages/person81.html";
let param = {};

const main = () => {
    client.fetch(url, param, (err, $, res) => {
        if (err) {
            console.log("Error:", err);
            return;
        }
        let body = $.html();
        console.log(body);
    });
}

main();