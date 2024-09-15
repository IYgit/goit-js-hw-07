// Отримуємо елементи input і span
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо прослуховувач події input на елемент input
nameInput.addEventListener('input', () => {
  // Очищаємо значення інпуту від пробілів по краях
  const trimmedValue = nameInput.value.trim();

  // Підставляємо значення в span або "Anonymous", якщо інпут порожній
  nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
