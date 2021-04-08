const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInputFocus = (event) => {
  outputEl.textContent = event.currentTarget.value;
  if (!outputEl.textContent) {
    outputEl.textContent = "незнакомец";
  }
};

inputEl.addEventListener("input", onInputFocus);
