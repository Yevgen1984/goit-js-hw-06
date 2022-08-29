// 


document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const {email, password} = event.target.elements;
    console.dir(event.target.elements)
    const fieldEmail = email.value;
    const fieldPassw = password.value;

    if (fieldEmail.length == 0 || fieldPassw.length == 0) {
        alert('Всі поля повинні бути заповнені');
        return;
    }

    const obj = {email:fieldEmail, password:fieldPassw};
    event.target.reset();
    console.log(obj);
});


const form = document.querySelector(".login-form");

// 8 завдання: - діставай значення за ключами, а не за індексами - змінні, оголошені через let, ніколи не змінюються

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.