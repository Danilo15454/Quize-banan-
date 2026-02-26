// const { createElement } = require("react")

let URLparams = new URLSearchParams(window.location.search)
let bananaType = URLparams.get('proshel')
let shortName = URLparams.get('shortName')
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
// ajkhsfjahgfciuhashmdfcmhjghckmadhjsgcjahsfghcd
async function loadData() {
  try {
    const response = await fetch(`./test/${shortName}.json`);
    const jsonData = await response.json(); // Parses the response into a JS chapect
    let category = jsonData.category
    let questions = jsonData.questions
    let nametest = jsonData.name
    let chap = jsonData.type
    if (category == "opros") {
      if (bananaType) {
        closeCheck(time, nametest, chap)
      } else {
        oprosCheck(questions, nametest, time, chap)
      }
    }else if (category == "test") {
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

// Работа функции чтобы проверяло правильность ответа и выдавало умный или нет
function closeCheck(time, nametest, chap) {
  let bananaTypeBlock = document.createElement('div')
  bananaTypeBlock.classList.add('tupoe')
  let describeBlock = document.createElement('div')
  describeBlock.classList.add('vopros')

  answerBlock.appendChild(bananaTypeBlock)
  mainTimeBlock.appendChild(describeBlock)
  bananaTypeBlock.textContent = `Ты: ${chap.nespeliy.name}`
  timeBlock.textContent = `${time} сек`
  describeBlock.textContent = `Описание: ${chap.nespeliy.desc}`
  nameBlock.textContent = nametest
}

function oprosCheck(questions, nametest, time, chap) {
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
    bananaTypeBlock.textContent = `Ты: ${chap.ne.name}`
    describeBlock.textContent = `Описание: ${chap.ne.desc}`
  } else if (procents >= 18 && procents <= 50) {
    bananaTypeBlock.textContent = `Ты: ${chap.tupoi.name}`
    describeBlock.textContent = `Описание: ${chap.tupoi.desc}`
  } else if (procents >= 51 && procents <= 84) {
    bananaTypeBlock.textContent = `Ты: ${chap.basse.name}`
    describeBlock.textContent = `Описание: ${chap.basse.desc}`
  } else if (procents >= 85 && procents <= 100) {
    bananaTypeBlock.textContent = `Ты: ${chap.umniy.name}`
    describeBlock.textContent = `Описание: ${chap.umniy.desc}`
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


document.querySelector('.more').addEventListener('click', () => { 
  window.location = "http://127.0.0.1:5500/indexArtema.html" 
})