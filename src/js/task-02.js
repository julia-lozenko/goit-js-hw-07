const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const  ulList = document.querySelector("#ingredients");
// console.log(ingredientsUl);


const listEls = ingredients.map(ingredient => { 
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;

  return liItem;

})

ulList.append(...listEls);
