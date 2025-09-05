//This test uses POM to test 2 different paths of one page.
/*
import { test, expect } from '@playwright/test';
import { ConcatenateStrings } from '../pages/concatenateStrings';  // adjust path as needed

test.describe('Concatenate Strings Lab', () => {
  test('should concatenate two generated strings and succeed', async ({ page }) => {
     const concat = new ConcatenateStrings(page);
     await concat.navigate();
     await concat.generateAndSubmitRight();

     const resultLocator = await concat.waitForResult();
     const resultText = (await resultLocator.textContent())?.trim();

     expect(resultText).toBe('Success!');
  });
  
});

  test('should submit wrong string and fail', async ({ page }) => {
     const concat = new ConcatenateStrings(page);
     await concat.navigate();
     await concat.generateAndSubmitWrong();

     const resultLocator = await concat.waitForResult();
     const resultText = (await resultLocator.textContent())?.trim();

     expect(resultText).toBe('Try again!');
  });
  */

  import { test as base, expect } from '@playwright/test';
import { ConcatenateStrings } from '../pages/concatenateStrings';  // adjust path as needed

// 🔹 Extend base test with a fixture
const test = base.extend<{ concatenateStrings: ConcatenateStrings }>({
  concatenateStrings: async ({ page }, use) => {
    const concat = new ConcatenateStrings(page);
    await use(concat);  // makes it available to tests
  },
});

test.describe('Concatenate Strings Lab', () => {
  test('should concatenate two generated strings and succeed', async ({ concatenateStrings }) => {
    await concatenateStrings.navigate();
    await concatenateStrings.generateAndSubmitRight();

    const resultLocator = await concatenateStrings.waitForResult();
    const resultText = (await resultLocator.textContent())?.trim();

    expect(resultText).toBe('Success!');
  });

  test('should submit wrong string and fail', async ({ concatenateStrings }) => {
    await concatenateStrings.navigate();
    await concatenateStrings.generateAndSubmitWrong();

    const resultLocator = await concatenateStrings.waitForResult();
    const resultText = (await resultLocator.textContent())?.trim();

    expect(resultText).toBe('Try again!');
  });
});
