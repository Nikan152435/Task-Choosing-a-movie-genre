const form = document.querySelector('form');
const content = document.querySelector('.content');
const select = document.getElementById('genre');

// Функция для создания элемента option с заданным label и value
const createOption = (label, value) => {
  const option = document.createElement('option');
  option.textContent = label; // Используем textContent для отображаемого текста
  option.value = value;
  select.appendChild(option);
}

// Создаем опции для селекта жанров
createOption('Драма', 'drama');
createOption('Комедия', 'comedy');
createOption('Фантастика', 'sci-fi');

// Функция для создания параграфов с данными фильма и жанра
const createP = (name, genre) => {
  const movieName = document.createElement('p');
  const movieGenre = document.createElement('p');
  movieName.textContent = `Название фильма: ${name}`;
  movieGenre.textContent = `Жанр: ${genre}`;
  content.appendChild(movieName);
  content.appendChild(movieGenre);
}

// Обработчик события отправки формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const genre = select.options[select.selectedIndex].textContent; // Получаем текст выбранной опции

  // Создаем параграфы с данными и добавляем их в блок content
  createP(name, genre);
  form.reset(); // Сбрасываем значения формы после отправки
});

//Решение эксперта

const selectElement = document.getElementById('genre');
const form = document.querySelector('form');
const inputElement = document.getElementById('name');
const contentElement = document.querySelector('.content');

const options = [
    {label: 'Драма', value: 'drama'},
    {label: 'Комедия', value: 'comedy'},
    {label: 'Фантастика', value: 'sci-fi'}
];

options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.label;
    selectElement.add(optionElement);
});

form.addEventListener('submit', event => {
    event.preventDefault();

    const selectedOption = selectElement.options[selectElement.selectedIndex].text;
    const inputValue = inputElement.value;
    createElements(inputValue, selectedOption)
    inputElement.value = '';
});

const createElements = (title, genre) => {
    const titleElement = document.createElement('p');
    const genreElement = document.createElement('p');
    titleElement.textContent = `Название фильма: ${title}`;
    genreElement.textContent = `Жанр: ${genre}`;
    contentElement.appendChild(titleElement);
    contentElement.appendChild(genreElement);
}

