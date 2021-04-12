const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];


const ulList = document.querySelector("#ingredients");

const processSingleItem = (el) => {
  const liItem = document.createElement("li");
  liItem.textContent = el;
  return liItem;
}

const processAllItems = (arr) =>  arr.map((el) => processSingleItem(el));
const listEls = processAllItems(ingredients);

ulList.append(...listEls);
