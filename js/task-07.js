const rangeRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

const editFont = () => {
  textRef.style.fontSize = rangeRef.value + "px";
}

rangeRef.addEventListener("input", editFont);

