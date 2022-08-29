
let valElement = document.querySelector('#value');
let counterValue = 0;

document.querySelector('[data-action="decrement"]').addEventListener('click',()=>{
    valElement.innerHTML = counterValue -= 1;
});

document.querySelector('[data-action="increment"]').addEventListener('click',()=>{
    valElement.innerHTML = counterValue += 1;
});


