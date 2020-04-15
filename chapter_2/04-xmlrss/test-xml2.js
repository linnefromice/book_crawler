const parseString = require('xml2js').parseString;

const xml = `<fruits shop='AAA'>
<item price='140'>Banana</item>
<item price='200'>Apple</item>
</fruits>`;

const main = () => {
    parseString(xml, (err, result) => {
        let shop = result.fruits.$.shop;
        console.log(`shop=${shop}`);
        let items = result.fruits.item;
        items.forEach(i => {
            console.log(`-- name=${i._}`);
            console.log(`   price=${i.$.price}`);
        });
    });
}

main();