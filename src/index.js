const express = require('express');
const bodyParser = require('body-parser');
const { validateCreditCard } = require('./validators/creditCardValidator');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/validate-card', (req, res) => {
    const { cardNumber } = req.body;

    if (!cardNumber) {
        return res.status(400).json({ error: 'Card number is required' });
    }

    const result = validateCreditCard(cardNumber);

    if (result.error) {
        return res.status(400).json({ error: result.error });
    }

    res.json({ cardType: result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});