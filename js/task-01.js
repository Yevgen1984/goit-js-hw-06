
"use strict";

const AllUlCategories = document.querySelectorAll('.item')
const categoriesArray = [...AllUlCategories]
for (const categories of categoriesArray) {
    const title = categories.querySelector('h2')
    const collection = categories.querySelector('ul')
    console.log("categori:", title.textContent);
    console.log("Element:", collection.children.length)
}


console.log('Number of categories:', AllUlCategories.length);




































// 'use strict'


// const main_block  = document.querySelectorAll('#categories > li');
// const h2_block  = [];
// main_block.forEach((el) => {
//     console.log({
//         name : el.querySelector('h2').innerHTML,
//         coun : el.querySelectorAll('ul > li').length,
//     }) ;
// });


















// Напиши скрипт, який: 

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.











// "use strict";



// const categoriesArray = [...AllUlCategories]
// for (const categories of categoriesArray) {
//     const title = categories.querySelector('h2')
//     const collection = categories.querySelector('ul')
//     console.log("categori:", .textContent);
//     console.log("Element:", lub.children.length)
// }
// const AllUlCategories = document.querySelectorAll('.item')

// console.log('Number of categories:', AllUlCategories.length);




