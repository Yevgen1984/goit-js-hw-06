let val_element = document.querySelector('#name-output');
document.querySelector('#name-input').addEventListener('input',function() {
    val_element.innerHTML = this.value.length > 0 ? this.value : 'Anonymous';
});


