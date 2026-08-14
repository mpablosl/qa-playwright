const { test, expect } = require('@playwright/test');

test('Deve validar o preenchimento e o estado dos campos do formulário', async ({ page }) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const nameInput = page.locator('input#name');
    const emailInput = page.locator('input#email');
    const maleRadio = page.locator('input#male');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(maleRadio).toBeVisible();

    await nameInput.fill('Pablo Lopes');
    await emailInput.fill('teste@teste.com');
    await maleRadio.check();

    await expect(nameInput).toHaveValue('Pablo Lopes');
    await expect(emailInput).toHaveValue('teste@teste.com');
    await expect(maleRadio).toBeChecked()

})