// Cria a classe que representa a página/formulario
class PracticeFormPage {

    // O construtor recebe o objeto 'page' do Playwright
    constructor(page) {

        // Armazena o objeto page dentro da classe para utilizá-lo nos métodos
        this.page = page;

        // Locators do formulário
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.phoneInput = page.locator('#phone');        
        this.maleRadio = page.locator('#male');
        this.sundayCheckbox = page.locator('#sunday');
        this.countrySelect = page.locator('#country');
    }

    // Acessa a página TestAutomation Practice
    async openSite() {
        await this.page.goto('/');
    }

    // Preenche os dados pessoais / Recebe os valores através dos parâmetros: nome, email e telefone
    async fillPersonalData(name, email, phone, country) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.countrySelect.selectOption({ label: country});
    }

    // Seleciona o gênero masculino
    async selectMaleGender() {
        await this.maleRadio.check();
    }

    async selectSunday() {
        await this.sundayCheckbox.check();
    }

    async uncheckSunday() {
        await this.sundayCheckbox.uncheck();
    }

    /*async selectCountry(countryLabel) {
        await this.countrySelect.selectOption({ label: countryLabel });
  }*/
    
}

module.exports = { PracticeFormPage };