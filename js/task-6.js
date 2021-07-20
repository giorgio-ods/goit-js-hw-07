const inputEl = document.querySelector(`#validation-input`);

console.log(inputEl.textContent.length);


const changeBorder = function (event) {

    
    const length = event.currentTarget.value.length;
    console.log(length);

 if (length === Number(event.currentTarget.getAttribute('data-length'))) {
     inputEl.classList.add('valid');
     inputEl.classList.remove('invalid');
     console.log("valid");
    } else {
     inputEl.classList.add('invalid');
     inputEl.classList.remove('valid');
     console.log("invalid");
    };
}

inputEl.addEventListener('blur', changeBorder);