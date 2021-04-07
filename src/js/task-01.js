


const ulEl = document.querySelector('ul');
const ulChild = ulEl.children.length;
console.log(`В списке ${ulChild} категории.`);

 document.querySelectorAll('li.item').forEach(el => {
  const category = el.querySelector('h2').textContent
  const itemsLength = el.querySelector('ul').children.length
  console.log(`- Категория: ${category}`);
  console.log(`- Количество элементов: ${itemsLength}`);
});



// const categoriesRef = document.getElementById("categories");
// const itemsRefs = document.querySelectorAll(".item");
// const printCategoryQuantity = (elementRef) => {
//   const childrenArrayRefs = elementRef.children;
//   console.log(`В списке ${childrenArrayRefs.length} категории.`);
// };
// printCategoryQuantity(categoriesRef);
// const printTitlesCountElements = (arrayRefs) => {
//   arrayRefs.forEach((el) =>
//     console.log(
//       `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.lastElementChild.children.length}`
//     )
//   );
// };
// printTitlesCountElements(itemsRefs);