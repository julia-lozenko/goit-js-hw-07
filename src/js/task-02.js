const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const  ulList = document.querySelector("#ingredients");


ingredients.forEach(ingredient => { 
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;

ulList.append(liItem);
})
