import {test,expect} from '@playwright/test'

test('HomeChallenge', async ({page}, testInfo)=>{

    //Enter the website
    await page.goto('https://www.mercadolibre.com');

    await testInfo.attach("Home", {
        body: await page.screenshot(),
        contentType: "image/png",
    })

    //Select Mexico as a country
    await page.click('//*[@id="MX"]');

    await testInfo.attach("Slect Mexico", {
        body: await page.screenshot(),
        contentType: "image/png",
    })

    //Search for the term "playstation 4"
    await page.fill('//*[@id="cb1-edit"]','playstation 4');

    await testInfo.attach("Fill the Slection Field", {
        body: await page.screenshot(),
        contentType: "image/png",
    })

    await page.click('//html/body/header/div/div[2]/form/button/div');

    //Filter by condition "Nuevos"
    await page.click('//html/body/main/div/div[2]/aside/section/div[7]/ul/li[1]/a/span[1]');

    await testInfo.attach("Filter by Condition New", {
        body: await page.screenshot(),
        contentType: "image/png",
    })

    //Filter by location "Cdmx"
    await page.click('//html/body/main/div/div[2]/aside/section[2]/div[14]/ul/li[2]/a/span[1]');

    await testInfo.attach("Filter by Location CDMX", {
        body: await page.screenshot(),
        contentType: "image/png",
    })

    //Order by "mayor a menor precio"
    await page.click('//*[@id=":R5cab9:-display-values"]');
    await page.click('//html/body/main/div/div[2]/section/div[2]/div[2]/div/div/div[2]/div/div/div/div/div/ul/li[3]/div/div/span');

    await testInfo.attach("Order by Price", {
        body: await page.screenshot(),
        contentType: "image/png",
    })

    //Obtain the name and the price of the first 5 products
    const links = await page.$$('//ol/li/div/div/div/div/a[@class="ui-search-item__group__element shops__items-group-details ui-search-link"]');
    const prices = await page.$$('//ol/li/div/div/div[2]/div[2]/div/div/div/div/div/span/span[3]');

    await testInfo.attach("Obtain Names and Prices", {
        body: await page.screenshot(),
        contentType: "image/png",
    })

    //Print these products in the console
    for(var i = 0; i <= 4; i++)
    {
        const linkText = await links[i].textContent();
        const priceText = await prices[i].textContent();
        console.log(i + 1, ": ", linkText, " Precio: ", priceText);
    }

    //Close the window
    await page.close();
})

