const puppeteer = require('puppeteer')


let randomprofile = async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  let githubuser = ['phoomparin','dtinth','acoshift','lebrancconvas','rayriffy','pariyathida','5argon','gaearon']
  let id = Math.floor(Math.random()*githubuser.length)
  await page.goto(`https://github.com/${githubuser[id]}`)
}

randomprofile()