const puppeteer = require('puppeteer');

const operate_browser_one = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300 
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/')
  await page.type('input[name=q]', 'こんにちは', { delay: 50 }) 
  await page.click('input[type="submit"]')
  await browser.close();
}

const operate_browser_two = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300 
  });
  const page = await browser.newPage();
  await page.goto('https://example.com/');
  const title = await page.title();
  console.log(title);
  await browser.close();
}

const main = async () => {
  await operate_browser_one();
  await operate_browser_two();
}

main();