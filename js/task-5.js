function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо елементи кнопки та спану
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо прослуховувач події 'click' на кнопку
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону body
  document.body.style.backgroundColor = randomColor;

  // Встановлюємо текстовий вміст для span.color
  colorSpan.textContent = randomColor;
});
