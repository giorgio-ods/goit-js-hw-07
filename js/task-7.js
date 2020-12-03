const rangeRef = document.getElementById("font-size-control");
const targetSpan = document.getElementById("text");


const onInput = event => {
  targetSpan.style.fontSize = `${event.currentTarget.value}px`;
  console.log(targetSpan.style.fontSize);
}

rangeRef.addEventListener('input', onInput);