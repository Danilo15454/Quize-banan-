// const { createElement } = require("react")

let URLparams = new URLSearchParams(window.location.search)
let bananaType = URLparams.get('banan')
let time = URLparams.get('time')
console.log(bananaType)

const nameBlock = document.querySelector('.nazvanie')
const mainTimeBlock = document.querySelector('.time')
const answerBlock = document.querySelector('.otveti')
const bananaTypeBlock = document.querySelector('.tupoe')
const procentBlock = document.querySelector('.umnichka')
const scaleBlock = document.querySelector('.procentumnicka')
const timeBlock = document.querySelector('.obshchee')
const describeBlock = document.querySelector('.vopros')
async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData);
    let category = jsonData.category
    let questions = jsonData.questions
    let nametest = jsonData.name
    console.log(questions);
    if (bananaType) {
      closeCheck(time, nametest)
    } else if (category == "opros") {
      oprosCheck(questions, nametest, time)
    } else if (category == "test") {
      testCheck()
    }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}
loadData();
storage = window.localStorage
let name = localStorage.getItem("banani");
parse = JSON.parse(name)
console.log(parse.userAnswer);
let trueAnswer = 0

const obj = {
  umniyBanan: {
    name: "Умний Банан",
    desc: "типо умний"
  },
  basseBanan: {
    name: "Базовий банан",
    desc: "базовый минимум"
  },
  tupoiBanan: {
    name: "Тупой Банан",
    desc: "тупой и ещё тупее"
  },
  neBanan: {
    name: "Не Банан",
    desc: "не банан вообще"
  },
  nespeliyBanan: {
    name: "Неспелий Банан",
    desc: "неспелий лох"
  },
}
const test = {
  userAnswer: [],
  userChap: []
}
// Работа функции чтобы проверяло правильность ответа и выдавало умный или нет
function closeCheck(time, nametest) {
      bananaTypeBlock.textContent = `Ты: ${obj.nespeliyBanan.name}`
      timeBlock.textContent = `${time} сек`
      describeBlock.textContent = `Описание: ${obj.nespeliyBanan.desc}`
      nameBlock.textContent = nametest
}
function oprosCheck(questions, nametest, time) {
  for (let i = 0; i < questions.length; i++) {
    const element = parse.userAnswer[i];
    console.log(questions[i].correctAnswer)
    if (element == questions[i].correctAnswer) {
      trueAnswer++
    }
  }
  nameBlock.textContent = nametest
  let procents = (trueAnswer / questions.length) * 100
  procentBlock.textContent = Math.round(procents) + "%"

  if (procents <= 17) {
    bananaTypeBlock.textContent = `Ты: ${obj.neBanan.name}`
    describeBlock.textContent = `Описание: ${obj.neBanan.desc}`
  } else if (procents >= 18 && procents <= 50) {
    bananaTypeBlock.textContent = `Ты: ${obj.tupoiBanan.name}`
    describeBlock.textContent = `Описание: ${obj.tupoiBanan.desc}`
  } else if (procents >= 51 && procents <= 84) {
    bananaTypeBlock.textContent = `Ты: ${obj.basseBanan.name}`
    describeBlock.textContent = `Описание: ${obj.basseBanan.desc}`
  } else if (procents >= 85 && procents <= 100) {
    bananaTypeBlock.textContent = `Ты: ${obj.umniyBanan.name}`
    describeBlock.textContent = `Описание: ${obj.umniyBanan.desc}`
  }
  timeBlock.textContent = `${time} сек`
}

function testCheck() {
  // const answerBlock = document.createElement('div')
  // answerBlock.classList.add('otveti')

}


console.log(storage)
// добавить(недоспелый банан)


document.querySelector('.more').addEventListener('click', () => { window.location = "http://127.0.0.1:5500/newartema.html" })