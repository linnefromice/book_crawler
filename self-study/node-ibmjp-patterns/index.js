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

const list_item_selector = '.developer--card';

const roopPages = () => {
    let page = 1;
    let isContinue = true;
    let countOfItems = 0;
    do {
        let url = getListUrl(page);
        let result = client.fetchSync(url);
        if (result.error || !result.response || result.response.statusCode !== 200) {
            console.log(`ERROR: ${url}`);
            return;
        } else {
            const items = result.$(list_item_selector);
            const numberOfItems = items.length;
            if (numberOfItems == 0) {
                isContinue = false;
            } else {
                console.log(`Page${page}: ${numberOfItems}`);
                countOfItems += numberOfItems;
                for (let index = 0; index < items.length; index++) {
                    const obj = {
                        title: result.$('.developer--card__title span', items[index]).text().trim(),
                        url: `https://developer.ibm.com${result.$('.developer--card__block_link', items[index]).attr('href')}`,
                        data: result.$('.developer--card__date', items[index]).text().trim(),
                    }
                    console.log(obj);
                }
                page++;
            }
        }
    } while (isContinue);
    console.log(`COUNT OF ITEMS: ${countOfItems}`);
}

const main = () => {
    console.log(information_message);
    roopPages();
}

main();