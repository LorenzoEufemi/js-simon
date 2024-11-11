// DATI

const numberRandomElem = document.getElementById("number-random");
const formInput = document.getElementById("user-form")
const countElem = document.getElementById("count")
const allInputElem = document.querySelectorAll("input")
const resultElem = document.getElementById("result")

// ESECUZIONE
// 5 numeri random
const numbersRandom = [];
for (let i = 0; i < 5; i++) {
    const numbersItem = Math.floor(Math.random() * 99) + 1;
    numbersRandom.push(numbersItem)
}
console.log(numbersRandom);
numberRandomElem.innerHTML = numbersRandom

// countdown
let counter = 30;
const intervalId = setInterval(function () {
    countElem.innerHTML = counter;
    counter--;
    if (counter < 0) {

        clearInterval(intervalId);
        numberRandomElem.classList.add("d-none");
        formInput.classList.remove("d-none");
        countElem.classList.add("d-none");
    }
}, 1000);
// form per inserire e validazione numeri
formInput.addEventListener("submit", function (event) {
    event.preventDefault()

    let correctCount = 0

    for (let i = 0; i < allInputElem.length; i++) {
        const userNumber = parseInt(allInputElem[i].value);
        console.log(userNumber)
        if (numbersRandom.includes(userNumber)) {
            correctCount++;
            console.log(correctCount)
        }
    }

    resultElem.innerHTML = `Hai indovinato ${correctCount} numeri su 5!`
});


