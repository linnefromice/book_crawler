const http = require('http');
const fs = require('fs');

const main = () => {
    const url = "http://kujirahand.com/";
    const saveFile = "result.html";
    
    const output = fs.createWriteStream(saveFile);
    http.get(url, (res) => {
        res.pipe(output);
        res.on('end', () => {
            output.close();
            console.log('FINISH');
        });
    });
}

main();