const voprosBlock = document.querySelector(".vopros");
const answersBlock = document.querySelector(".answers");
const questCounterBlock = document.querySelector(".countert");
const tctBlock = document.querySelector(".exit-btn");
const progressBar = document.querySelector("#quiz-progress");

let URLparams = new URLSearchParams(window.location.search);
let shortName = URLparams.get('type') || 'banani'; // Если нет типа, берем дефолт
let questCounter = 0;
let startTime = Date.now();

const testState = {
    userAnswer: [],
};

async function loadData() {
    try {
        const response = await fetch(`./test/${shortName}.json`);
        const jsonData = await response.json();
        let questions = jsonData.questions;
        
        updateUI(questions);
    } catch (error) {
        console.error('Ошибка загрузки теста:', error);
        voprosBlock.textContent = "Миньоны потеряли файл с вопросами! 🍌";
    }
}

function updateUI(questions) {
    questCounterBlock.textContent = `ВОПРОС: ${questCounter + 1} / ${questions.length}`;
    
    // Обновляем полоску прогресса
    const progressPercent = ((questCounter) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    switcher(questCounter, questions);
}

function switcher(index, questions) {
    answersBlock.innerHTML = ""; // Очистка
    const currentQuestion = questions[index];
    voprosBlock.textContent = currentQuestion.question;

    // Работа с localStorage
    let storageData = localStorage.getItem("banani");
    let parse = storageData ? JSON.parse(storageData) : testState;

    currentQuestion.answers.forEach((text) => {
        const ansBtn = document.createElement('div');
        ansBtn.classList.add('answer');
        ansBtn.textContent = text;

        ansBtn.addEventListener("click", () => {
            ansBtn.classList.add('active');
            
            // Записываем ответ
            parse.userAnswer[index] = text;
            localStorage.setItem("banani", JSON.stringify(parse));

            // Небольшая задержка для анимации клика
            setTimeout(() => {
                questCounter++;
                if (questCounter >= questions.length) {
                    finishQuiz();
                } else {
                    updateUI(questions);
                }
            }, 300);
        });

        answersBlock.appendChild(ansBtn);
    });
}

function finishQuiz() {
    let duration = Math.floor((Date.now() - startTime) / 1000);
    window.location.href = `endquest.html?time=${duration}&shortName=${shortName}&proshel=true`;
}

// Кнопка выхода
tctBlock.addEventListener('click', () => {
    let duration = Math.floor((Date.now() - startTime) / 1000);
    window.location.href = `endquest.html?proshel=false&time=${duration}&shortName=${shortName}`;
});

loadData();