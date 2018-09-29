module.exports = function makeExchange(currency) {
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0) return {};
    const half = { name: 'H', value: 50 };
    const quarter = { name: 'Q', value: 25 };
    const dime = { name: 'D', value: 10 };
    const nickel = { name: 'N', value: 5 };
    const penny = { name: 'P', value: 1 };
    const coins = [half, quarter, dime, nickel, penny];
    let rest = currency;
    let result = {};
    coins.forEach(({ name, value }) => {
        const count = parseInt(rest/(value));
        rest %= value;
        if (count) result[name] = count;
    });
    return result;  
}
