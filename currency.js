class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=YJvRDc7um25hOb2MA2Z7ME9VpsYDk1KPHeuEQv5Y&base_currency="
    }


    async api(amount, firstCurrency, secondCurrency) {

        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json()
        const exchangedResult = amount * (result.data[secondCurrency]);
        
        return exchangedResult;
    }
}

