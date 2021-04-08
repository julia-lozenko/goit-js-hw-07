
const ulEl = document.querySelector('ul');
const ulChild = ulEl.children.length;
console.log(`В списке ${ulChild} категории.`);

 document.querySelectorAll('li.item').forEach(el => {
  const category = el.querySelector('h2').textContent
  const itemsLength = el.querySelector('ul').children.length
  console.log(`- Категория: ${category}`);
  console.log(`- Количество элементов: ${itemsLength}`);
});



