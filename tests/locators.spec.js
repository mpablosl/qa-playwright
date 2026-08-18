// Criar uma constante e 'require' importa um módulo Javascript
const {test, expect} = require('@playwright/test');

//Registrar Testes
test('deve localizar os elementos principais do formulário', async({ page }) =>{
    
    //Acessar a página testautomationpractice
    await page.goto('https://testautomationpractice.blogspot.com/');

    // const cria uma variável constante / nameInput é um nome descritivo page.locator(...) cria um locator
    const nameInput = page.locator('#name');    
    //await nameInput.type('Pablo Soares Lopes');
    await nameInput.pressSequentially('Pablo Soares Lopes');
    const emailInput = page.locator('#email');
    const phoneInput = page.locator('#phone');
    const maleRadio = page.locator('#male');
    const countrySelect = page.locator('#country');
    

    //Versão semântica recomendada
    /*const nameInput = page.getByLabel(/'Name:/i);
    const emailInput = page.getByLabel(/Email:/i);
    const maleRadio = page.getByRole('radio', { name: 'Male'});
    const countrySelect = page.getByLabel(/Country:/i);*/

    // expect(nameInput) informa que a assertion será feita sobre nameInput / toHaveCount(1) espera que exista exatamente uma correspondência
    // 1 é o parâmetro esperado
    await expect(nameInput).toHaveCount(1);
    await expect(emailInput).toHaveCount(1);
    await expect(phoneInput).toHaveCount(1);
    await expect(maleRadio).toHaveCount(1);
    await expect(countrySelect).toHaveCount(1);

    //toBeVisible verifica se o elemento está visível para o usuário
    //Se o elemento existir, mas estiver oculto, o teste falha.
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(phoneInput).toBeVisible();
    await expect(maleRadio).toBeVisible();
    await expect(countrySelect).toBeVisible();
});
