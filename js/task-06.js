
document.querySelector('#validation-input').onblur  = function() {
    this.removeAttribute('class');
    if (this.value.length < this.getAttribute('data-length')) {
        this.classList.add('invalid');
    } else {
        this.classList.add('valid');
    }
};


