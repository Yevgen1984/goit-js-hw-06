const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount)
{
  let width = 30;
  let heigth = 30;

  for(let i = 0; i < amount; i++) {
      let el = document.createElement('div');
      el.style.width = width + 'px';
      el.style.height = heigth + 'px';  
      el.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(el);
      heigth += 10;
      width += 10;
  }
}

function destroyBoxes(){
  boxes.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', function(e){
  e.preventDefault();
  destroyBoxes();
  let input = document.querySelector('[type="number"]');
  if (input.value >= input.getAttribute('min') || input.value <= input.getAttribute('max')  ) {
    createBoxes(input.value);
  }
});

document.querySelector('[data-destroy]').addEventListener('click', function(e){
  e.preventDefault();
  destroyBoxes();
});













// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів 
//в input і натискає кнопку Створити, 
//після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.