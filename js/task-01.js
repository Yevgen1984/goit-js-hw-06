"use strict";



const categoriesArray = [...AllUlCategories]
for (const categories of categoriesArray) {
    const Evg = categories.querySelector('h2')
    const lub = categories.querySelector('ul')
    console.log("categori:", Evg.textContent);
    console.log("Element:", lub.children.length)
}
const AllUlCategories = document.querySelectorAll('.item')

console.log('Number of categories:', AllUlCategories.length);




