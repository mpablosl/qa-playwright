const {test, expect} = require('playwright/test');

test.only('deve interagir com os campos principais do formulário', async({ page }) =>{

    //Acessar a página testautomationpractice
    await page.goto('https://testautomationpractice.blogspot.com/');


    // const cria uma variável constante / nameInput é um nome descritivo page.locator(...) cria um locator
    const nameInput = page.locator('#name');
    await nameInput.fill('Pablo Lopes');
    await expect(nameInput).toHaveValue('Pablo Lopes');

    // const cria uma variável constante / emailInput é um nome descritivo page.locator(...) cria um locator
    const emailInput = page.locator('#email');
    await emailInput.fill('pablo.lopes@exemplo.com');
    await expect(emailInput).toHaveValue('pablo.lopes@exemplo.com');

    // const cria uma variável constante / phoneInput é um nome descritivo page.locator(...) cria um locator
    const phoneInput = page.locator('#phone');
    await phoneInput.fill('1234567890');
    await expect(phoneInput).toHaveValue('1234567890');

    // const cria uma variável constante / maleRadio é um nome descritivo page.locator(...) cria um locator
    const maleRadio = page.locator('#male');
    await maleRadio.check();
    await expect(maleRadio).toBeChecked();


    // const cria uma variável constante / sundayCheckbox é um nome descritivo page.locator(...) cria um locator
    const sundayCheckbox = page.locator('#sunday');
    await sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();

    const mondayCheckbox = page.locator('#monday');
    await mondayCheckbox.check();
    await expect(mondayCheckbox).toBeChecked();

    const tuesdayCheckbox = page.locator('#tuesday');
    await tuesdayCheckbox.check();
    await expect(tuesdayCheckbox).toBeChecked();


    // const cria uma variável constante / countrySelect é um nome descritivo page.locator(...) cria um locator
    const countrySelect = page.locator('#country');

    await countrySelect.selectOption({label:'Brazil'});
    await expect(countrySelect).toHaveValue('brazil');    

    // const cria uma variável constante / countrySelect é um nome descritivo page.locator(...) cria um locator   
    await countrySelect.selectOption({label:'Canada'});
    await expect(countrySelect).toHaveValue('canada');    

})