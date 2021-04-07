const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInputFocus = (event) => {
  outputRef.textContent = event.currentTarget.value;
  if (!outputRef.textContent) {
    outputRef.textContent = "незнакомец";
  }
};

inputRef.addEventListener("input", onInputFocus);
