
let val_element = document.querySelector('#value');
let counterValue = 0;
document.querySelector('[data-action="decrement"]').addEventListener('click',()=>{
    val_element.innerHTML = counterValue = Number(counterValue) - 1;
});

document.querySelector('[data-action="increment"]').addEventListener('click',()=>{
    val_element.innerHTML = counterValue = Number(counterValue) + 1;
});

