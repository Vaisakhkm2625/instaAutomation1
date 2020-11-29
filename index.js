const puppeteer = require("puppeteer");

const Username = '';//
const password = '';//

//var n = 0;
// "#f28a8a9d7d9ed > div > span > a"

async function enterBox( page,selector, texting){
   await page.waitForSelector(selector);
   var h = await page.$(
         selector
   );
   await h.type(texting); 
  // await page.screenshot({path:'img${n}'});
  // n++;
}

async function buttonClicker( page,selector){
   await page.waitForSelector(selector);
   var enterbutton = await page.$(
      selector
   );
   enterbutton.click();
   // await page.screenshot({path:'img${n}'});
   // n++;
}

//await page.waitFor(1000);

async function scrape(url) {
  
  const browser = await puppeteer.launch({ headless: false });//
  
  const page = await browser.newPage();
  
  await page.goto(url);
  /// loginpage
   page.waitForTimeout(1000);
  enterBox( page,"#loginForm > div > div:nth-child(1) > div > label > input",Username);

//   await page.waitForSelector("#loginForm > div > div:nth-child(1) > div > label > input");
//   var logininp = await page.$(
//         "#loginForm > div > div:nth-child(1) > div > label > input"
//   );
//   await logininp.type("vvkm2625");
page.waitFor(1000);
   enterBox( page,"#loginForm > div > div:nth-child(2) > div > label > input",password);

//   await page.waitForSelector("#loginForm > div > div:nth-child(2) > div > label > input");
//   var passinp = await page.$(
//         "#loginForm > div > div:nth-child(2) > div > label > input"
//   );
//    await passinp.type("VVKM2625@jnv");

   buttonClicker( page, "#loginForm > div > div:nth-child(3)" );
//   await page.waitForSelector("#loginForm > div > div:nth-child(3)");
//   var enterbutton = await page.$(
//         "#loginForm > div > div:nth-child(3)"
//   );
//   enterbutton.click();
try{
   buttonClicker( page,"#react-root > section > main > div > div > div > div > button");
}catch(e){console.log('vvvvvvvvvvvvvvvvv'+e)}
   
//   await page.waitForSelector("#react-root > section > main > div > div > div > div > button");
//   var noteNow = await page.$(
//         "#react-root > section > main > div > div > div > div > button"
//   );
//   noteNow.click();
try{
   buttonClicker( page,"body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm" );
}catch(e){console.log('vvvvvvvv222222222222'+e)}
//   await page.waitForSelector("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm");
//   var NotNow = await page.$(
//         "body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm"
//   );
//   NotNow.click();


  page.waitFor(10000);
buttonClicker( page,"#f28a8a9d7d9ed > div > span > a");


  debugger;
}

scrape("https://instagram.com/");



//   for (let i = 0; i <50; i++) {
//     await inp.type("Good night");
//     await page.keyboard.press("Enter");
//   }

