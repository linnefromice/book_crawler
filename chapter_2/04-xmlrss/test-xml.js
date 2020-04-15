const parseString = require('xml2js').parseString;

const xml = `<fruits shop='AAA'>
<item price='140'>Banana</item>
<item price='200'>Apple</item>
</fruits>`;

const main = () => {
    parseString(xml, (err, result) => {
        console.log(JSON.stringify(result));
    })    
}

main();