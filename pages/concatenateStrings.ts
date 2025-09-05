import { Page, Locator } from '@playwright/test';   

export class ConcatenateStrings {
    public page: Page;
    readonly generateButton: Locator;
    readonly submitButton: Locator;
    readonly string1: Locator;
    readonly string2: Locator;
    readonly textBox: Locator;
    readonly resultMessage: Locator;

     constructor(page:Page) {
        this.page = page;
        this.generateButton = page.getByRole('button', { name: 'Generate Strings' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.string1 = page.locator('p.string1');
        this.string2 = page.locator('p.string2');
        this.textBox = page.locator('input');
        this.resultMessage = page.locator('[data-testid="message"]');
  }
    async navigate() {
        await this.page.goto('https://thelab.boozang.com/concatStrings');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async generateAndSubmitRight() {
        await this.generateButton.click()
        const str1 = (await this.string1.textContent())?.trim() ?? '';
        const str2 = (await this.string2.textContent())?.trim() ?? '';
        const concatenated = str1 + str2;
        await this.textBox.fill(concatenated);
        await this.submitButton.click();
    }

        async generateAndSubmitWrong() {
        //const randomText = String.rando
        await this.generateButton.click()
        await this.textBox.fill("abcd");
        await this.submitButton.click();
    }

    async waitForResult() {
        await this.resultMessage
        return this.resultMessage
    }

}