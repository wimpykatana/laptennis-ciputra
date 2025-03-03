import puppeteer from 'puppeteer';

export const booking = async (email, nama, tel, no, gedung, tanggal, jam, web) => {
    console.log(`booking using ${email} ${nama} ${tel} ${no} ${gedung} ${tanggal} ${jam}`);

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: true, devtools: true });
    const page = await browser.newPage();

    // Set screen size
    await page.setViewport({ width: 800, height: 1024 });

    // Navigate the page to a URL
    await page.goto(web, { waitUntil: 'networkidle0' });

    await page.type('input[data-component="email"]', `${email}`);
    await page.type('input#input_26', `${nama}`);
    await page.click('input[type="radio"][value="Penyewa"]');
    await page.click(`input[type="radio"][value="${gedung}"]`);
    await page.type('input#input_28', `${no}`);
    await page.type('input#input_32', `${tel}`);
    await page.type('input#input_31', '6');
    await page.type('input#input_38', 'Sahabat Raket');
    await page.type('input#input_39', '08568809107');

    await page.waitForSelector(`div[data-value="${tanggal}"]`);
    await page.click(`div[data-value="${tanggal}"]`);

    await page.waitForSelector(`div[data-value="${tanggal} ${jam}"]`);
    await page.click(`div[data-value="${tanggal} ${jam}"]`);

    await page.waitForNetworkIdle();

    //execution
    await page.waitForSelector('button#input_17');
    await page.click('button#input_17');
    await page.waitForNetworkIdle();

    //close browser
    await browser.close();

    console.log(`booking done ${email} ${nama} ${no} ${gedung} ${tanggal} ${jam}`);
}