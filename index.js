const puppeteer = require("puppeteer");

async function start() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = "https://getbootstrap.com";

    await page.goto(url);
    await page.screenshot({
        path: "1.png"
    });

    await page.click("a[href='/docs/5.1/getting-started/introduction/']");

    await page.pdf({
        path: "a.pdf"
    });

    await page.setViewport({
        width: 1920,
        height: 1080
    });
    await page.screenshot({
        path: "2.png"
    });

    // await page.setViewport({
    //     width: 640,
    //     height: 480
    // });

    await page.mouse.wheel({
        deltaY: 500
    })

    await page.screenshot({
        path: "3.png"
    });

    await browser.close();

}

start();