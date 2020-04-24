const fs = require('fs')
const cheerio = require('cheerio')

const main = () => {
    const xmlData = fs.readFileSync("shelter.xml", "utf-8")
    $ = cheerio.load(xmlData)
    // console.log($("Shelter").text())
    $("Shelter").each((i, el) => {
        const name = $(el).children("Name").text()
        const ward = $(el).children("Ward").text()
        console.log(ward, name);
    })
}

main();