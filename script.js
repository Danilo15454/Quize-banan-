const voprosBlock = document.querySelector(".vopros")
const answersBlock = document.querySelector(".answers")
const planka = document.querySelector(".planka")
const questCounterBlock = document.querySelector(".countert")
const tctBlock = document.querySelector(".tct")
storage = window.localStorage
let URLparams = new URLSearchParams(window.location.search)
let shortName = URLparams.get('type')
let questCounter = 0
const test = {
  userAnswer: [],
}
// Влада делает переход на этот сайт и ссылка будет
// http://127.0.0.1:5500/index.html?test=banani
// Сделать запрос через fetch c учетом ссылки и названия теста
// по типу    const response = await fetch('./тутназвание.json');
async function loadData() {
  try {
    const response = await fetch(`./test/${shortName}.json`);
    const jsonData = await response.json(); // Parses the response into a JS object
    let questions = jsonData.questions
    questCounterBlock.textContent = `${questCounter + 1} / ${questions.length}`
    switcher(questCounter, questions)
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}
loadData();
let startTime = Date.now()
function switcher(questCounter, questions) {

  answersBlock.textContent = ""
  let answers = questions[questCounter].answers
  voprosBlock.textContent = questions[questCounter].question

  let obj = localStorage.getItem("banani")
  let parse = ""
  if (obj == null) {
    localStorage.setItem("banani", JSON.stringify(test))
  } else {
    parse = JSON.parse(obj)

  }
  for (let j = 0; j < answers.length; j++) {

    const element = answers[j];
    const ans1Block = document.createElement('div')
    ans1Block.classList.add('answer')
    ans1Block.textContent = element
    answersBlock.appendChild(ans1Block)
    ans1Block.addEventListener("click", () => {
      parse.userAnswer[questCounter] = ans1Block.textContent
      localStorage.setItem("banani", JSON.stringify(parse))
      questCounter++
      if (questCounter == questions.length) {
        let endTime = Date.now();
        let durationInSeconds = Math.floor((endTime - startTime) / 1000);
        window.location = `http://127.0.0.1:5500/endquest.html?time=${durationInSeconds}&shortName=${shortName}`
        return
      }
      questCounterBlock.textContent = `${questCounter + 1} / ${questions.length}`
      switcher(questCounter, questions)
    })
  }
}
// добавить(недоспелый банан)
// Недоспелый банан убираем (Не закончил тест)
// Передача через ссылку неоконченого теста 
tctBlock.addEventListener('click',
  function () {
    let endTime = Date.now();
    let durationInSeconds = Math.floor((endTime - startTime) / 1000);
    window.location = `http://127.0.0.1:5500/endquest.html?proshel=false&time=${durationInSeconds}&shortName=${shortName}`
  }
)
const answer = document.querySelectorAll('.answer');
answer.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.add('active');

    setTimeout(() => {
      item.classList.remove('active');
    }, 1000);
  })
})

