const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

const launchIPhone = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 300,    
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    const iPhone = devices['iPhone 6'];
    await page.emulate(iPhone);
    await page.goto('https://www.google.com/')
    await page.type('input[name=q]', 'こんにちは', { delay: 50 }) 
    const buttons = await page.$$('button');
    await buttons[2].click();
    await page.waitFor(5000);
    await browser.close();
    return;
}

launchIPhone();   