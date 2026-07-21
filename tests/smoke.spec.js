const { test, expect } = require('@playwright/test');

test('deve abrir a página principal do site de prática', async({ page }) =>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle(/Automation Testing Practice/i);
    await expect(page.locator('#name')).toBeVisible();

});

test('Deve abrir a página principal do saucedemo', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/i);
    await expect(page.locator(".login_logo")).toBeVisible();
});