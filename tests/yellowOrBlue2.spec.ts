import { test, expect } from '@playwright/test';

test('Successfully use the page', async ({ page }) => {
  await page.goto('https://thelab.boozang.com/yellowOrBlue');
  await page.getByRole('button', { name: 'Generate Color' }).click();
  await expect(page.locator('h5.color')).toBeVisible();
  
  const outputText = (await page.locator('h5.color').textContent())?.trim().toLowerCase();
  console.log('Raw output text:', outputText);

  if (outputText === "yellow") {
    await page.locator('button', { hasText: /yellow/i }).click();
  } else if (outputText === "blue") {
    await page.locator('button', { hasText: /blue/i }).click();
  } else {
    console.log('Neither yellow nor blue text is visible.');
  }

  await expect(page.getByTestId('result')).toContainText('Success!');
});