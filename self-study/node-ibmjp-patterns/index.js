const client = require('cheerio-httpcli');

const information_message = `
Simple crawler tool to list patterns from IBM Code JP site.
2020 @linnefromice
`;

const getListUrl = (_page) => {
    const base_url = 'https://developer.ibm.com/jp/patterns/';
    if (_page == 0) {
        return base_url;
    } else {
        return `${base_url}/page/${_page}/`
    }
}

const roopPages = () => {
    let page = 1;
    do {
        let url = getListUrl(page);
        let result = client.fetchSync(url);
        if (result.error || !result.response || result.response.statusCode !== 200) {
            console.log(`ERROR: ${url}`);
            return;
        } else {
            console.log(`Page${page}: ${result.response.headers["content-type"]}`);
            page++;
        }
    } while (page <= 16);
}

const main = () => {
    console.log(information_message);
    roopPages();
    return;
}

main();