// const { createElement } = require("react")

let URLparams = new URLSearchParams(window.location.search)
let bananaType = URLparams.get('banan')
let time = URLparams.get('time')

const mainBlock = document.querySelector('.main')
const nameBlock = document.querySelector('.nazvanie')
const mainTimeBlock = document.querySelector('.time')
const answerBlock = document.querySelector('.otveti')
const bananaTypeBlock = document.querySelector('.tupoe')
// const procentBlock = document.querySelector('.umnichka')
const firstScaleBlock = document.querySelector('.procenttuposti')
const scaleBlock = document.querySelector('.procentumnicka')
const timeBlock = document.querySelector('.obshchee')
const describeBlock = document.querySelector('.vopros')
async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    let category = jsonData.category
    let questions = jsonData.questions
    let nametest = jsonData.name
    if (bananaType) {
      closeCheck(time, nametest)
    } else if (category == "opros") {
      oprosCheck(questions, nametest, time)
    } else if (category == "test") {
      testCheck(questions, nametest, time)
    }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}
loadData();
storage = window.localStorage
let name = localStorage.getItem("banani");
parse = JSON.parse(name)
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
  let bananaTypeBlock = document.createElement('div')
  bananaTypeBlock.classList.add('tupoe')
  let describeBlock = document.createElement('div')
  describeBlock.classList.add('vopros')

  answerBlock.appendChild(bananaTypeBlock)
  mainTimeBlock.appendChild(describeBlock)
  bananaTypeBlock.textContent = `Ты: ${obj.nespeliyBanan.name}`
  timeBlock.textContent = `${time} сек`
  describeBlock.textContent = `Описание: ${obj.nespeliyBanan.desc}`
  nameBlock.textContent = nametest
}

function oprosCheck(questions, nametest, time) {
  let bananaTypeBlock = document.createElement('div')
  bananaTypeBlock.classList.add('tupoe')
  let describeBlock = document.createElement('div')
  describeBlock.classList.add('vopros')

  answerBlock.appendChild(bananaTypeBlock)
  mainTimeBlock.appendChild(describeBlock)
  for (let i = 0; i < questions.length; i++) {
    const element = parse.userAnswer[i];
    if (element == questions[i].correctAnswer) {
      trueAnswer++
    }
  }
  nameBlock.textContent = nametest
  let procents = (trueAnswer / questions.length) * 100

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

function testCheck(questions, nametest, time) {
  let procentBlock = document.createElement('div')
  procentBlock.classList.add('umnichka')
  let bananaTypeBlock = document.createElement('div')
  bananaTypeBlock.classList.add('tupoe')
  let scaleBlock = document.createElement('div')
  scaleBlock.classList.add('procentumnicka')
  firstScaleBlock.style.display = "block"

  answerBlock.appendChild(procentBlock)
  answerBlock.appendChild(bananaTypeBlock)
  firstScaleBlock.appendChild(scaleBlock)

  for (let i = 0; i < questions.length; i++) {
    const element = parse.userAnswer[i];
    if (element == questions[i].correctAnswer) {
      trueAnswer++
    }
  }
  nameBlock.textContent = nametest
  let procents = (trueAnswer / questions.length) * 100
  procentBlock.textContent = Math.round(procents) + "%"
  scaleBlock.style.width = `${procents}%`
  bananaTypeBlock.textContent = `${trueAnswer} / ${questions.length}`
  timeBlock.textContent = `${time} сек`
}
// добавить(недоспелый банан)


document.querySelector('.more').addEventListener('click', () => { window.location = "http://127.0.0.1:5500/newartema.html" })