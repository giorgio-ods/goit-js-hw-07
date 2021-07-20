const form = {
    input: document.getElementById('name-input'),
    name: document.getElementById('name-output'),
};

//function inputChange(event) { 
  //  form.name.textContent = event.currentTarget.value;
  //}

//form.input.addEventListener('input', inputChange);


form.input.addEventListener(`input`, (event) => {
    event.currentTarget.value.trim() === '' ? form.name.textContent = 'незнакомец' : form.name.textContent = event.currentTarget.value
})