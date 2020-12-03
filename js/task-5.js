const form = {
    input: document.getElementById('name-input'),
    name: document.getElementById('name-output'),
};

function inputChange(event) {
    form.name.textContent = event.currentTarget.value;
}

form.input.addEventListener('input', inputChange);