import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thelab.boozang.com/waitGame');
  await expect(page.getByRole('heading', { name: 'Wait Game', exact: true })).toBeVisible();
  await expect(page.getByText('As opposed to speed game,')).toBeVisible();
  await page.getByTestId('startBtn').click();

  const button = page.getByRole('button', { name: 'End Game' });

  // Wait until the button is visible (up to 5 seconds)
  await button.waitFor({ state: 'visible' });

  // Then wait an additional 5 seconds before clicking
  await page.waitForTimeout(5000);
  await button.click();

  await expect(page.getByTestId('message')).toContainText('Success!');
  await expect(page.getByText('ms above 5 seconds.')).toBeVisible();
});