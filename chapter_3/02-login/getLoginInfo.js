const puppeteer = require('puppeteer');
const loginInfo = require('./loginInfo.json')

const launchTypingClub = async () => {
    // console.log(loginInfo.typing_club.username);
    // console.log(loginInfo.typing_club.password);
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 300,
    });
    const page = await browser.newPage();
    await page.goto('https://www.typingclub.com/')
    await page.click('.login-link');
    await page.waitFor(2000);
    await browser.close();
}

launchTypingClub();