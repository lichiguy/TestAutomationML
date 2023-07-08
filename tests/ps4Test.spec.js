import {test,expect} from '@playwright/test'

test('HomeChallenge', async ({page})=>{

    //Enter the website
    await page.goto('https://www.mercadolibre.com');

    //Select Mexico as a country
    await page.click('//*[@id="MX"]');

    //Search for the term "playstation 4"
    await page.fill('//*[@id="cb1-edit"]','playstation 4');
    await page.click('//html/body/header/div/div[2]/form/button/div');

    //Filter by condition "Nuevos"
    await page.click('//html/body/main/div/div[2]/aside/section/div[7]/ul/li[1]/a/span[1]');

    //Filter by location "Cdmx"
    await page.click('//html/body/main/div/div[2]/aside/section[2]/div[14]/ul/li[2]/a/span[1]');

    //Order by "mayor a menor precio"
    await page.click('//*[@id=":R5cab9:-display-values"]');
    await page.click('//html/body/main/div/div[2]/section/div[2]/div[2]/div/div/div[2]/div/div/div/div/div/ul/li[3]/div/div/span');

    //Obtain the name and the price of the first 5 products
    const links = await page.$$('//ol/li/div/div/div/div/a[@class="ui-search-item__group__element shops__items-group-details ui-search-link"]');
    const prices = await page.$$('//ol/li/div/div/div[2]/div[2]/div/div/div/div/div/span/span[3]');

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

