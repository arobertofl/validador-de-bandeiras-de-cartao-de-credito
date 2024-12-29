# Validador de Cartão de Crédito

Este projeto fornece uma funcionalidade simples de validação de cartões de crédito que identifica a bandeira de um cartão com base no seu número.

## Estrutura do Projeto

```
credit-card-validator
├── src
│   ├── index.js          # Ponto de entrada da aplicação
│   ├── validators
│   │   └── creditCardValidator.js  # Contém a lógica de validação
├── package.json          # Arquivo de configuração do npm
└── README.md             # Documentação do projeto
```

## Instalação

Para começar, clone o repositório e instale as dependências:

```bash
git clone <repository-url>
cd credit-card-validator
npm install
```

## Uso

Para validar um número de cartão de crédito, você pode usar a função `validateCreditCard` do arquivo `creditCardValidator.js`.

### Exemplo

```javascript
const { validateCreditCard } = require('./validators/creditCardValidator');

const cardNumber = '4111111111111111'; // Número de cartão de exemplo
const result = validateCreditCard(cardNumber);
console.log(result); // Exibe a bandeira do cartão ou uma mensagem de erro
```

## Contribuindo

Sinta-se à vontade para enviar issues ou pull requests para melhorias ou correções de bugs.

## Licença

Este projeto está licenciado sob a Licença MIT.

