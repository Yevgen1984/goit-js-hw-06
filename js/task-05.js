let val_element = document.querySelector('#name-output');
document.querySelector('#name-input').addEventListener('keyup',function() {
    val_element.innerHTML = this.value.length == 0 ? 'Anonymous' : this.value;
});


