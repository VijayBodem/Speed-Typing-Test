let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let counter = 0;
spinnerEl.classList.toggle("d-none");

function counterStart() {
    counter = counter + 1;
    timerEl.textContent = counter;

}
let counterValue = setInterval(counterStart, 1000);

function getQuoteDescription() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            let quote = jsonData.content;
            quoteDisplayEl.textContent = quote;
        })
}
getQuoteDescription();
counterStart();

resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    getQuoteDescription();
    counterStart();
    counter = 0;
    resultEl.textContent = "";
    quoteInputEl.value = "";
}
submitBtnEl.onclick = function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(counterStart);
        resultEl.textContent = "You Typed In " + counter + " Seconds";
    } else {
        resultEl.textContent = "You Typed Incorrect Sentence";
    }
}