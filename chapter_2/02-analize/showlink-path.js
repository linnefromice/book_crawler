const client = require('cheerio-httpcli');
const URL = require('url');

const url = "https://www.aozora.gr.jp/index_pages/person81.html";
let param = {};

const main = () => {
    client.fetch(url, param, (err, $, res) => {
        if (err) {
            console.log("error");
            return;
        }
        $("a").each((idx) => {
            let text = $(this).text();
            let href = $(this).attr('href');
            if (!href) return;
            let href2 = URL.resolve(url, href);
            console.log(text + " : " + href);
            console.log(" => " + href2 + "\n");
        })
    });
}

main();