const incrementValueRef = document.querySelector("#value");
const decrementActionRef = document.querySelector("[data-action=decrement]")
const incrementActionRef = document.querySelector("[data-action=increment]")


let counterValue = Number(incrementValueRef.textContent);
const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;

const onBtnIncrementClick = () => (incrementValueRef.textContent = increment());
const onButtonDecrementClick = () => (incrementValueRef.textContent = decrement());

decrementActionRef.addEventListener("click", onButtonDecrementClick);
incrementActionRef.addEventListener("click", onBtnIncrementClick);



