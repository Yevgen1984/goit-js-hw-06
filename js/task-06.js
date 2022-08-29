
document.querySelector('#validation-input').addEventListener('blur', function(event) {
  
    const {value, dataset, classList} = event.target;   
    console.dir(event);
    if (value.length.toString() !== (dataset.length)) {
        classList.add('invalid');
    } else {
        classList.add('valid');
        classList.remove('invalid');
    }
});



// 6 завдання: - твоє рішення не працює