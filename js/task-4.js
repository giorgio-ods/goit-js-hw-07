let counterValue = 0;

const buttonInc = document.querySelector('[data-action=increment]');
const buttonDec = document.querySelector('[data-action=decrement]');
const number = document.getElementById('value');

        
buttonInc.addEventListener('click', () => {
    counterValue += 1;
    number.textContent = counterValue;
});

buttonDec.addEventListener('click', () => {
    counterValue -= 1;
    number.textContent = counterValue;
});

