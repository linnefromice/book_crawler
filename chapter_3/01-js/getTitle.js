const puppeteer = require('puppeteer');

const getTitle = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300 
  });
  const page = await browser.newPage();
  await page.goto(url)
  console.log(await page.title());
  await browser.close();
}

const main = async () => {
  getTitle('https://www.google.com/');
  getTitle('https://www.facebook.com/');
  getTitle('https://www.microsoft.com/');
}

main();