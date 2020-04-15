const parseString = require('xml2js').parseString;

const xml = `<items>
<item><name>Banana</name><price>130</price></item>
<item><name>Apple</name><price>300</price></item>
<item><name>Pear</name><price>250</price></item>
</items>`;

const main = () => {
    parseString(xml, (err, r) => {
        console.log(JSON.stringify(r));
        r.items.item.forEach(element => {
            console.log("---");
            console.log(element.name[0]);
            console.log(element.price[0]);    
        });
    });
}

main();
