

let counterElement = document.getElementById("counter");
let incrementElement = document.getElementById("increment");
let decrementElement = document.getElementById("decrement");


let counterValue = 0;


incrementElement.addEventListener("click", function(){
    counterValue = counterValue + 1
    console.log(typeof(counterElement.textContent));
    counterElement.textContent=counterValue
})

decrementElement.addEventListener("click", function(){
    counterValue = counterValue - 1
    counterElement.textContent=counterValue
})