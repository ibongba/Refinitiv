const puppeteer = require('puppeteer');
const {parse} = require('node-html-parser');

const [,,fund_name] = process.argv;

if(!fund_name){
  console.log('Fund name is required!')
  process.exit()
}

(async () => {
  // console.log('Fund Name',fund_name)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://codequiz.azurewebsites.net/');
  await page.click('input')
  
  await page.screenshot();
  const data = await page.content();
  const html = parse(data)
  const rows = html.querySelectorAll('td')
  // var found = false
  var value = 'Not found';
  for(let i = 0 ; i < rows.length ; i++){
    if(rows[i].rawText.trim() === fund_name.trim()){
      value = rows[i+1]? rows[i+1].rawText : value
    }
  }
  // for(const row of rows){
  //   if(found) {
  //     value = row.rawText
  //     break;
  //   }
  //   if(row.rawText === fund_name){
  //     found = true
  //   }
    
  // }
  console.log(value)
  // console.log(parse(data))
  await browser.close();
})();