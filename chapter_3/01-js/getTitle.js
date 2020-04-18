const puppeteer = require('puppeteer');

const getTitle = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300 
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/')
  const title = await page.title();
  console.log(title);
  await browser.close();
}

getTitle();