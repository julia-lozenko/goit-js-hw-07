const incrementValueRef = document.querySelector("#value");
const decrementActionRef = document.querySelector("[data-action=decrement]")
const incrementActionRef = document.querySelector("[data-action=increment]")
const reset = document.querySelector("[data-action=reset]");

let counterValue = Number(incrementValueRef.textContent);
const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;

const onBtnIncrementClick = () => (incrementValueRef.textContent = increment());
const onButtonDecrementClieck = () => (incrementValueRef.textContent = decrement());

decrementActionRef.addEventListener("click", onButtonDecrementClieck);
incrementActionRef.addEventListener("click", onBtnIncrementClick);



