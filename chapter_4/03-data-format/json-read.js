const fs = require('fs');

const main = () => {
    const jsonStr = fs.readFileSync("test.json");
    const jsonObj = JSON.parse(jsonStr);
    
    jsonObj.items.forEach(element => {
        console.log(`NAME: ${element.name} / PRICE: ${element.price}`);
    });
}

main();