function validateCreditCard(cardNumber) {
    const cardPatterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        MasterCard: /^5[1-5][0-9]{14}$/,
        AmericanExpress: /^3[47][0-9]{13}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
    };

    for (const [brand, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return brand;
        }
    }

    return 'Invalid card number';
}

function isValidCardLength(cardNumber) {
    return cardNumber.length >= 13 && cardNumber.length <= 19;
}

module.exports = {
    validateCreditCard,
    isValidCardLength,
};