function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо елементи input і кнопки
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Додаємо прослуховувач події 'click' на кнопку Create
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);

  // Перевіряємо, чи значення input в межах 1-100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищаємо значення input
  }
});

// Додаємо прослуховувач події 'click' на кнопку Destroy
destroyButton.addEventListener('click', destroyBoxes);

// Функція для створення колекції div-елементів
function createBoxes(amount) {
  // Очищуємо попередні елементи
  destroyBoxes();

  const boxes = [];
  let size = 30; // Початковий розмір першого елемента

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10; // Збільшуємо розмір для наступного елемента

    boxes.push(box);
  }

  // Додаємо всі елементи в DOM за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення колекції div-елементів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

