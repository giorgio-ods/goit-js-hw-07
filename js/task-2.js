const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];  

const ingredientsContainer = document.querySelector('ul#ingredients')

const items = ingredients.map(elements => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = elements;
    return ingredientsEl;
});
console.log(items);

ingredientsContainer.append(...items);