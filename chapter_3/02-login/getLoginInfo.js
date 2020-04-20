const puppeteer = require('puppeteer');
const loginInfo = require('./loginInfo.json')

const launchTypingClub = async () => {
    // console.log(loginInfo.typing_club.username);
    // console.log(loginInfo.typing_club.password);
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    });
    const page = await browser.newPage();
    await page.goto('https://www.typingclub.com/')
    await page.click('.login-link');
    await page.waitForNavigation();
    await page.waitFor(3000); // provisional
    await page.type('.form-group > #username', loginInfo.typing_club.username);
    await page.type('.form-group > #password', loginInfo.typing_club.password);
    await page.click('#login-with-password');
    await page.waitForNavigation();
    await page.waitFor(3000); // provisional
    await page.screenshot({path: 'screenShotPage.png'});
    await browser.close();
}

launchTypingClub();