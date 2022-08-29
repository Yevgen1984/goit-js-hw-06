document.querySelector('#font-size-control').addEventListener("input", function(){
   
    if (true){document.querySelector('#text').style.fontSize = `${this.value}px`;
    }
});


// 7 завдання: в тебе value не може бути менше за min і більше за max в будь-якому випадку, так як 
// в тебе ці значення задані в самому інпуті. Це все одно, що ти б написав if (true) { ... }

// 

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>