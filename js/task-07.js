document.querySelector('#font-size-control').addEventListener("input", function(){
   
    if (this.value >= this.getAttribute('min') &&  this.value <= this.getAttribute('max')){
            document.querySelector('#text').style.fontSize = `${this.value}px`;
    }
});




// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>