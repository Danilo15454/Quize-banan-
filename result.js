let URLparams = new URLSearchParams(window.location.search);
let isPassed = URLparams.get('proshel'); // 'true' или null
let shortName = URLparams.get('shortName');
let time = URLparams.get('time') || 0;

const nameBlock = document.querySelector('.nazvanie');
const answerContainer = document.querySelector('.otveti');
const timeValue = document.querySelector('#timeValue');
const descriptionBlock = document.querySelector('#description');
const resultScale = document.querySelector('#resultScale');
const resultScaleContainer = document.querySelector('#resultScaleContainer');

async function loadData() {
    try {
        const response = await fetch(`./test/${shortName}.json`);
        const jsonData = await response.json();
        
        const { category, questions, name: nametest, type: chap } = jsonData;
        nameBlock.textContent = nametest;
        timeValue.textContent = time;

        // Получаем данные из localStorage
        const storage = JSON.parse(localStorage.getItem("banani")) || { userAnswer: [] };

        if (category === "opros") {
            // Если вышел раньше (недоспелый) или дошел до конца
            if (isPassed === "true") {
                processOpros(questions, storage, chap);
            } else {
                showEarlyExit(chap);
            }
        } else if (category === "test") {
            processTest(questions, storage);
        }
    } catch (error) {
        console.error('Error:', error);
        nameBlock.textContent = "Ошибка загрузки результатов 🍌";
    }
}

// Логика для тестов с правильными ответами
function processTest(questions, storage) {
    let trueCount = 0;
    questions.forEach((q, i) => {
        if (storage.userAnswer[i] === q.correctAnswer) trueCount++;
    });

    const percent = Math.round((trueCount / questions.length) * 100);
    
    createResultBadge(`${percent}%`, 'umnichka');
    createResultBadge(`${trueCount} / ${questions.length}`, 'tupoe');

    resultScaleContainer.style.display = "block";
    setTimeout(() => resultScale.style.width = `${percent}%`, 100);

    descriptionBlock.textContent = percent > 70 ? "Ты настоящий Банановый Мастер! Грю гордится тобой." : "Нужно больше тренировок в лаборатории!";
}

// Логика для опросов по категориям
function processOpros(questions, storage, chap) {
    let trueCount = 0;
    questions.forEach((q, i) => {
        if (storage.userAnswer[i] === q.correctAnswer) trueCount++;
    });

    const percent = (trueCount / questions.length) * 100;
    let resultKey = '';

    if (percent <= 17) resultKey = 'ne';
    else if (percent <= 50) resultKey = 'tupoi';
    else if (percent <= 84) resultKey = 'basse';
    else resultKey = 'umniy';

    createResultBadge(`Ты: ${chap[resultKey].name}`, 'umnichka');
    descriptionBlock.textContent = chap[resultKey].desc;
}

// Если закрыл тест раньше
function showEarlyExit(chap) {
    createResultBadge(`Статус: ${chap.nespeliy.name}`, 'tupoe');
    descriptionBlock.textContent = chap.nespeliy.desc;
}

function createResultBadge(text, className) {
    const div = document.createElement('div');
    div.classList.add(className);
    div.textContent = text;
    answerContainer.appendChild(div);
}

// Кнопка "Еще тестов"
document.querySelector('.more').addEventListener('click', () => {
    window.location.href = "indexArtema.html";
});

loadData();