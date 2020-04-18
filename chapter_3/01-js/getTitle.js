const puppeteer = require('puppeteer');

const getTitle = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300 
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/')
  let title = await page.title();
  console.log(title);
  await page.goto('https://www.facebook.com/')
  console.log(await page.title());
  await page.goto('https://www.microsoft.com/')
  console.log(await page.title());
  await browser.close();
}

getTitle();