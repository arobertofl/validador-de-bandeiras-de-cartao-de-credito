const readline = require('readline');
const { validateCreditCard } = require('./validators/creditCardValidator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a credit card number: ', (cardNumber) => {
    const result = validateCreditCard(cardNumber);
    console.log(result);
    rl.close();
});