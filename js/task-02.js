
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngr = document.querySelector("#ingredients");

const newIngredients = ingredients.map(ingredient => { // new_ingredients - 
  const itemIngr = document.createElement("li");
  itemIngr.textContent = ingredient
  itemIngr.classList.add('item')
  console.log(itemIngr);
  return itemIngr
})
  listIngr.append(...newIngredients);