const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector('#ingredients');
  const liIngredients = ingredients.map(el=>{
    const li = document.createElement('li');
          li.textContent = el;
          li.classList.add('item')    
    return li;
  })
allIngredients.append(...liIngredients)


