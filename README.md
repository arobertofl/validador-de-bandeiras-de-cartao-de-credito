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
git clone https://github.com/arobertofl/validador-de-bandeiras-de-cartao-de-credito.git
cd credit-card-validator
npm install
```

## Uso

Para iniciar o servidor, você pode usar o comando `npm start` para iniciar o servidor normalmente ou `npm run dev` para iniciar o servidor com `nodemon`, que reiniciará automaticamente o servidor sempre que houver uma alteração nos arquivos.

### Iniciar o servidor

Para iniciar o servidor normalmente:
```bash
npm start
```

Para iniciar o servidor em modo de desenvolvimento com `nodemon`:
```bash
npm run dev
```

### API de Validação de Cartão de Crédito

Você pode enviar uma solicitação POST para `http://localhost:3000/validate-card` com um corpo JSON contendo o número do cartão de crédito:

```json
{
    "cardNumber": "4111111111111111"
}
```

A API retornará um JSON com a bandeira do cartão ou um erro de validação.

### Exemplo de Resposta

#### Sucesso
```json
{
    "cardType": "visa"
}
```

#### Erro
```json
{
    "error": "Invalid card number"
}
```

## Contribuindo

Sinta-se à vontade para enviar issues ou pull requests para melhorias ou correções de bugs.

## Licença

Este projeto está licenciado sob a Licença MIT.

