import { test, expect } from '@playwright/test';

test('Task1: website is up and running', async ({ page }) => {
    await page.goto('https://www.nomobank.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Nomo Bank | UK Sharia-compliant digital banking");
    // click accept cookies button
    await page.locator('[data-test="cookies-accept"]').click();
});

test('Task2: validate finance amount and monthly costs', async ({ page }) => {
    await page.goto('https://www.nomobank.com/rental-property-finance/');

    // click accept cookies button
    await page.locator('[data-test="cookies-accept"]').click();
    // switch focus to iframe
    const iframe = page.frameLocator('iframe.mc-embedded_Iframe__27PR_');
    // fill the fields
    await iframe.locator("#mui-1").fill('1000000');
    await iframe.locator("#mui-2").fill('1000');
    await iframe.locator("#mui-3").fill('500000');
    await iframe.locator('div[aria-haspopup="listbox"]').click();
    await iframe.getByText('2 year fixed rate').click();

    // assert that the fields are as expected
    await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('94,229 GBP');
    await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('510 GBP');
});
