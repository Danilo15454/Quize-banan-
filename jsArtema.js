const container = document.querySelector(".main");

// Работа с LocalStorage (с проверкой на существование данных)
let bananaData = localStorage.getItem("banani");
if (bananaData) {
    let parse = JSON.parse(bananaData);
    parse.userAnswer = [];
    localStorage.setItem("banani", JSON.stringify(parse));
} else {
    // Если данных нет, создаем пустую структуру
    localStorage.setItem("banani", JSON.stringify({ userAnswer: [] }));
}

/**
 * Создает карточку в стиле Миньонов
 */
function createBlock({ nazvanie, tema, author, priclad, shortName }) {
    // 1. Создаем основную ссылку-контейнер
    const newCard = document.createElement('a');
    newCard.href = `index.html?type=${shortName}`; // Путь к тесту
    newCard.classList.add('card'); // Используем общий класс для стилей

    // 2. Добавляем иконку (как на макете)
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('card-icon');
    // Можно рандомизировать иконку или завязать на тему
    iconDiv.textContent = tema.toLowerCase().includes('хим') ? '🧪' : '🍌'; 
    newCard.appendChild(iconDiv);

    // 3. Создаем блок с текстом
    const textContainer = document.createElement('div');
    textContainer.classList.add('text');

    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = nazvanie;

    const pricladBlock = document.createElement('p');
    pricladBlock.classList.add("priclad");
    // Объединяем автора и описание для красоты, как в макете
    pricladBlock.textContent = `${priclad} (Автор: ${author})`;

    textContainer.appendChild(h3);
    textContainer.appendChild(pricladBlock);
    newCard.appendChild(textContainer);

    // 4. Кнопка "Перейти"
    const but = document.createElement('button');
    but.textContent = "УЧАСТВОВАТЬ"; // В стиле Миньонов
    newCard.appendChild(but);

    // 5. Добавляем всё в главный контейнер
    container.appendChild(newCard);
}

/**
 * Загрузка данных из JSON
 */
async function loadData() {
    try {
        const response = await fetch('./index.json');
        if (!response.ok) throw new Error('Сеть не алё');
        
        const jsonData = await response.json();

        // Очищаем контейнер перед загрузкой (на всякий случай)
        container.innerHTML = '';

        jsonData.tests.forEach(element => {
            createBlock(element);
        });

    } catch (error) {
        console.error('Ошибка при загрузке бананов:', error);
        container.innerHTML = `<p style="color:red">Упс! Миньоны уронили базу данных. Ошибка: ${error.message}</p>`;
    }
}

// Запуск
loadData();