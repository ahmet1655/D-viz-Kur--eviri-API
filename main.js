const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultImput = document.querySelector("#result");
const exchangeButton=document.querySelector("#exchangeButton")

runEventListeners();

const currency=new Currency();

function runEventListeners() {
    exchangeButton.addEventListener("click", exchange)
}

function exchange() {

    let amount = amountInput.value.trim();

    let firstCurrency = firstOption.options[firstOption.options.selectedIndex].textContent;

    let secondCurrency = secondOption.options[secondOption.options.selectedIndex].textContent;

    currency.api(amount,firstCurrency,secondCurrency)


  .then((exchanedResult)=>resultImput.value=exchanedResult.toFixed(3))


    }
