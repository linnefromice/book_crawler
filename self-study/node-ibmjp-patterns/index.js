const client = require('cheerio-httpcli');
const nedb = require('nedb');
const datastore = require('nedb-promise');

const nedb_file_name = 'list-ibmjp-patterns.nedb.json';
const DB = datastore({
    file_name: nedb_file_name,
    autoload: true
});

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

const roopPages = async () => {
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
                        date: result.$('.developer--card__date', items[index]).text().trim(),
                    }
                    // console.log(obj);
                    await DB.insert(obj);
                }
                page++;
            }
        }
    } while (isContinue);
    console.log(`COUNT OF ITEMS: ${countOfItems}`);
}

const main = async () => {
    console.log(information_message);
    await roopPages();
    const allData = await DB.cfind({}).projection({
        title: 1,
        url: 1,
        date: 1,
        _id: 0
    }).exec();
    allData.forEach(element => {
        console.log(element);
    });
}

main();