// Importa o test runneer e as assertions do Playwright Test
const { test, expect } = require('@playwright/test');

// Importa a classe PracticeFormPage do nosso Page Object
// Essa classe contém os Locators e as ações da página
const { PracticeFormPage } = require('../pages/practice-form.page');

// Cria o caso de teste
test('deve preencher o formulario usando Page Object Model', async({ page }) =>{

    // Cria uma instância do Page Object
    // Passamos o objeto 'page' para que a classe PracticeFormPage consiga interagir com o navegador
    const formPage = new PracticeFormPage(page);

    // Abre a página através do método criado no Page Object
    await formPage.openSite();
    
    // Preenche os dados pessoais, o método fillPersonalData foi criado dentro do Page Object
    await formPage.fillPersonalData(
        'Pablo Lopes',
        'teste@example.com',
        '1199999999',
        'Brazil'
    )

    // Seleciona o radio button correspondente ao gênero masculino, implementação localizada no Page Object
    await formPage.selectMaleGender();

    // Marca o Checkbox Sunday
    await formPage.selectSunday();
    // Verifica se o Checkbox foi marcado
    await expect(formPage.sundayCheckbox).toBeChecked();

    // Desmarca o Checkbox Sunday
    await formPage.uncheckSunday();
    // Verifica se o Checkbox foi desmarcado
    await expect(formPage.sundayCheckbox).not.toBeChecked();

    //await formPage.selectCountry('Brazil')

    await expect(formPage.nameInput).toHaveValue('Pablo Lopes');
    await expect(formPage.emailInput).toHaveValue('teste@example.com');
    await expect(formPage.phoneInput).toHaveValue('1199999999');  
    await expect(formPage.countrySelect).toHaveValue('brazil')
      
    await expect(formPage.maleRadio).toBeChecked();        

    

})

