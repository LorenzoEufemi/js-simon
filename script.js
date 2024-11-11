const NumberRandomElem = document.getElementById("number-random");


// 5 numeri random
const numbersRandom = [];
for ( let i = 0; i < 5; i++) {
    const numbersItem = Math.floor(Math.random() * 99) + 1;
numbersRandom.push(numbersItem)
}
console.log(numbersRandom);
NumberRandomElem.innerHTML = numbersRandom


setTimeout(function(){


},30000)