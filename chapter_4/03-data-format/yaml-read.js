const yaml = require('js-yaml')
const fs = require('fs')

const main = () => {
    const txt = fs.readFileSync("test.yml", "utf-8")
    const obj = yaml.safeLoad(txt)

    obj.items.forEach(element => {
        console.log(element.name, element.price)
    });
}

main()