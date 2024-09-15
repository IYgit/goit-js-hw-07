// Отримуємо всі елементи li з класом 'item' в ul#categories
const categories = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Ітеруємо через кожен елемент категорії
categories.forEach((category) => {
  // Знаходимо заголовок категорії (тег <h2>)
  const categoryTitle = category.querySelector('h2').textContent;

  // Знаходимо кількість елементів у категорії (усіх вкладених <li>)
  const categoryItemsCount = category.querySelectorAll('ul li').length;

  // Виводимо дані про категорію
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
