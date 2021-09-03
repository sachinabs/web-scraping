  
let fs = require('fs');
const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // await driver.get('https://www.google.com/search?q=ind+vs+eng&rlz=1C1CHBF_enIN924IN924&oq=ind+c&aqs=chrome.1.69i57j0i10i512j46i10i131i433j0i10i512j46i175i199i512j69i60l3.3305j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11lgzlrt2_;5;/m/021q23;dt;fp;1;;');
        await driver.get('https://www.google.com/search?q=cricket+score+live&rlz=1C1CHBF_enIN924IN924&sxsrf=AOaemvIsMnqyXCr4wyw1DcVkTcnD0LMkIA%3A1630656312108&ei=ONcxYZSFBp3B3LUPuOaCmAY&oq=cricket+sco&gs_lcp=Cgdnd3Mtd2l6EAMYADIQCAAQgAQQsQMQgwEQRhD9ATIFCAAQgAQyBQgAEJECMgUIABCRAjIFCAAQkQIyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDAToHCAAQRxCwA0oFCDoSATJKBAhBGABQrT1Y_kJg4lFoAHADeACAAZECiAGWBZIBBTAuMS4ymAEAoAEByAEIwAEB&sclient=gws-wiz#sie=m;/g/11rx3fyk_c;5;/g/11hzqvv2q7;dt;fp;1;;');
        await sleep(2000);
    } catch (err) {
        await driver.quit();
    }
    var today = new Date();
    var dateTime;
    dateTime = dateTime + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(dateTime)
    async function show() {
        var card = await driver.findElement(By.xpath('//*[@id="liveresults-sports-immersive__match-fullpage"]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/span[1]')).getText();
        var teamName_a = await driver.findElement(By.xpath('//*[@id="liveresults-sports-immersive__match-fullpage"]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]')).getText();
        var teamName_b = await driver.findElement(By.xpath('//*[@id="liveresults-sports-immersive__match-fullpage"]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/div[1]/span[1]')).getText();
        var mydata = {
            'TeamA': teamName_a,
            'TeamB': teamName_b,
            'Card': card
        }
        fs.writeFileSync("scores.json", JSON.stringify(mydata));
        console.log(mydata);
    }
    setInterval(show, 5000);
})();