const client = require('cheerio-httpcli');

const url = "https://www.aozora.gr.jp/index_pages/person81.html";
const main = () => {
    let param = {};
    client.fetch(url, param, (err, $, res) => {
        if (err) {
            console.log('error');
            return;
        }
        $("li").each((idx) => {
            let text = $(this).text();
            let href = $(this).attr('href');
            // console.log(text + ':' + href); --> :undefined
        });
    });
}

main();
