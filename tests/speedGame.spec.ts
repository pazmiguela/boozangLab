import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thelab.boozang.com/speedGame');
  await expect(page.getByRole('heading', { name: 'Speed Game', exact: true })).toBeVisible();
  await page.getByTestId('startBtn').click();
  await page.getByTestId('startBtn').click();
  

  const button = page.getByRole('button', { name: 'End Game' });
  await button.waitFor({ state: 'visible' }); // waits until the button is visible
  await button.click();

  await expect(page.getByTestId('message')).toBeVisible();
  await expect(page.getByTestId('result')).toContainText('Your reaction time is');
})