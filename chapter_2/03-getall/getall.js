const client = require('cheerio-httpcli');
const request = require('request');
const URL = require('url');
const fs = require('fs');
const path = require('path');

const LINK_LEVEL = 3;
const TARGET_URL = "https://nodejs.org/api/"
let list = {};

const downloadRec = (url, level) => {
    if (level >= LINK_LEVEL) return;
    if (list[url]) return;
    list[url] = true;
    let us = TARGET_URL.split("/");
    us.pop();
    let base = us.join("/");
    if (url.indexOf(base) < 0) return;
    console.log("URL : " + url);
    client.fetch(url, {}, (err, $, res) => {
        $("a").each((idx) => {
            let href = $(this).attr('href');
            console.log("href : " + href);
            if (!href) return;
            href = URL.resolve(url, href);
            href = href.replace(/\#.+$/, "");
            downloadRec(href, level + 1);
        });
        if (url.substr(url.length-1, 1) == '/') {
            url += "index.html";
        }
        let savePath = url.split("/").slice(2).join("/");
        checkSaveDir(savePath);
        console.log(savePath);
        fs.writeFileSync(savePath, $.html());
    });
}

const checkSaveDir = (filename) => {
    let dir = path.dirname(filename);
    let dirList = dir.split("/");
    let p = "";
    dirList.forEach(i => {
        p += dirList[i] + "/";
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p)
        }
    })
}

const main = () => {
    downloadRec(TARGET_URL, 0);
}

main();