const xml2js = require('xml2js');
const parseString = xml2js.parseString;
const Builder = xml2js.Builder;

const xml = `<fruits shop='AAA'>
<item price='140'>Banana</item>
<item price='200'>Apple</item>
</fruits>`;

const main = () => {
    parseString(xml, (err, r) => {
        console.log(JSON.stringify(r));
        const newXml = new Builder().buildObject(r);
        console.log(newXml);
    });
}

main();