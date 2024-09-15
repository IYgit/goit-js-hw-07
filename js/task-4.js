// Отримуємо форму
const loginForm = document.querySelector('.login-form');

// Додаємо прослуховувач події submit на форму
loginForm.addEventListener('submit', (event) => {
  // Зупиняємо перезавантаження сторінки
  event.preventDefault();

  // Отримуємо значення полів форми
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email: email,
    password: password,
  };

  // Виводимо об'єкт у консоль
  console.log(formData);

  // Очищуємо поля форми
  loginForm.reset();
});

