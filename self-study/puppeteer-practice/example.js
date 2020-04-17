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
  /*
  await page.goto('https://example.com/');
  console.log(page.title);
  */
  await browser.close();
}

const main = () => {
  operate_browser_one();
}

main();