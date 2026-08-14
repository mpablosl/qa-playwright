# QA Automation com Playwright

Projeto de automação de testes Web desenvolvido com Playwright e JavaScript.

## Tecnologias utilizadas

- Playwright
- JavaScript
- Node.js

## Aplicação automatizada

- Test Automation Practice

## Instalação

```bash
npm install
```

## Executar os testes

```bash
npx playwright test --project=chromium
```

## Executar em modo headed

```bash
npx playwright test --project=chromium --headed
```

## Abrir o relatório

```bash
npx playwright show-report
```
## Estratégia de locators

A estratégia prioriza locators estáveis e orientados à intenção do usuário:

1. getByRole para elementos semânticos.
2. getByLabel para campos de formulário.
3. getByText para textos visíveis.
4. getByTestId quando existir um contrato explícito de teste.
5. CSS ou ID quando forem estáveis e necessários.
6. XPath somente como último recurso.

Não utilizamos nth(), first(), last() ou waitForTimeout() para esconder locators imprecisos.

## Assertions e auto-waiting

O projeto utiliza assertions web-first para validar estados da aplicação.

Matchers praticados:

- toBeVisible()
- toHaveValue()
- toBeChecked()
- toBeEnabled()
- toHaveCount()
- toHaveTitle()
- toHaveURL()

Evitamos waitForTimeout() porque esperas fixas tornam os testes lentos
e potencialmente instáveis.

Preferimos aguardar condições reais da aplicação por meio de actions
e assertions do Playwright.

## Actions

O projeto utiliza actions para simular interações do usuário:

- fill() para preencher campos.
- check() para marcar radio buttons e checkboxes.
- uncheck() para desmarcar checkboxes.
- selectOption() para selecionar opções em elementos select.
- click() para botões, links e elementos clicáveis.
- press() para teclas e atalhos.
- hover() para comportamentos dependentes do mouse.

Após cada action relevante, o teste valida o resultado esperado
com assertions apropriadas.

Evita-se waitForTimeout() e o uso de click() quando existe
uma action mais específica, como check().