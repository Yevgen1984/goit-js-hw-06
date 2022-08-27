
let val_element = document.querySelector('#value');

document.querySelector('[data-action="decrement"]').addEventListener('click',()=>{
    val_element.innerHTML = Number(val_element.innerHTML) - 1;
});

document.querySelector('[data-action="increment"]').addEventListener('click',()=>{
    val_element.innerHTML = Number(val_element.innerHTML) + 1;
});

