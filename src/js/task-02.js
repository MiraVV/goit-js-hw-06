const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(ingredient =>{
  const listEl = document.createElement("li");
  listEl.classList.add ("item");
  listEl.textContent = ingredient;
  
  return listEl;
})

const navEl = document.querySelector("#ingredients");

navEl.append(...ingredientsList);
