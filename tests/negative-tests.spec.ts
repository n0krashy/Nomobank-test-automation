import { test, expect, FrameLocator} from '@playwright/test';

let iframe: FrameLocator;

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.nomobank.com/rental-property-finance/');
    // click accept cookies button
    await page.locator('[data-test="cookies-accept"]').click();
    // switch focus to iframe
    iframe = page.frameLocator('iframe.mc-embedded_Iframe__27PR_');
});

test.describe('Field 1: Estimated property value field', () => {
    test.beforeEach(async () => {
        // enter valid values into fields 2 and 3
        await iframe.locator("#mui-2").fill('1000');
        await iframe.locator("#mui-3").fill('500000');
        await iframe.locator('div[aria-haspopup="listbox"]').click();
        await iframe.getByText('2 year fixed rate').click();
    });

    test('Entering letters', async () => {
        // enter letters into field 1
        await iframe.locator("#mui-1").fill('ABC');
        // assert that the fields are as expected
        await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('0 GBP');
        await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('NaN GBP');
    });

    test('Entering special characters', async () => {
        // enter special characters into field 1
        await iframe.locator("#mui-1").fill('!@#$%^&*()=|",<>?±');
        // assert that the fields are as expected
        await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('0 GBP');
        await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('NaN GBP');
    });

    test('Entering negative value', async () => {
        // enter negative value into field 1
        await iframe.locator("#mui-1").fill('-90');
        // assert that the fields are as expected
        await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('0 GBP');
        await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('0 GBP');
    });
});

test.describe('Field 2: Estimated monthly rental income field', () => {
    test.beforeEach(async () => {
        // enter valid values into fields 1 and 3
        await iframe.locator("#mui-1").fill('1000000');
        await iframe.locator("#mui-3").fill('500000');
        await iframe.locator('div[aria-haspopup="listbox"]').click();
        await iframe.getByText('2 year fixed rate').click();
    });

    test('Entering letters', async () => {
        // enter letters into field 2
        await iframe.locator("#mui-2").fill('ABC');
        // assert that the fields are as expected
        await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('0 GBP');
        await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('NaN GBP');
    });

    test('Entering special characters', async () => {
        // enter special characters into field 2
        await iframe.locator("#mui-2").fill('!@#$%^&*()=|",<>?±');
        // assert that the fields are as expected
        await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('0 GBP');
        await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('NaN GBP');
    });

    test('Entering negative value', async () => {
        // enter negative value into field 2
        await iframe.locator("#mui-2").fill('-90');
        // assert that the fields are as expected
        await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('0 GBP');
        await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('0 GBP');
    });
});

test.describe('Field 3: Down payment', () => {
    test.beforeEach(async () => {
        // enter valid values into fields 1 and 2
        await iframe.locator("#mui-1").fill('1000000');
        await iframe.locator("#mui-2").fill('1000');
        await iframe.locator('div[aria-haspopup="listbox"]').click();
        await iframe.getByText('2 year fixed rate').click();
    });

    test('Entering letters', async () => {
        // enter letters into field 3
        await iframe.locator("#mui-3").fill('ABC');
        // assert that the fields are as expected
        await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('0 GBP');
        await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('NaN GBP');
    });

    test('Entering special characters', async () => {
        // enter special characters into field 3
        await iframe.locator("#mui-3").fill('!@#$%^&*()=|",<>?±');
        // assert that the fields are as expected
        await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('0 GBP');
        await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('NaN GBP');
    });

    test('Entering negative value', async () => {
        // enter negative value into field 3
        await iframe.locator("#mui-3").fill('-90');
        // assert that the fields are as expected
        await expect(iframe.locator('.mc-results_MCResultsValueOfFinance__CBt1j')).toHaveText('0 GBP');
        await expect(iframe.locator('.mc-results_MCResultsMonthlyCosts__pRvOw')).toHaveText('0 GBP');
    });
});