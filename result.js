let URLparams = new URLSearchParams(window.location.search)
let bananaType = URLparams.get('banan')
console.log(bananaType)

const bananaTypeBlock = document.querySelector('.tupoe')
const procentBlock = document.querySelector('.umnichka')
const scaleBlock = document.querySelector('.procentumnicka')
const timeBlock = document.querySelector('.obshchee')
const describeBlock = document.querySelector('.vopros')
if (bananaType) {
    bananaTypeBlock.textContent = bananaType
}
storage = window.localStorage
const test = {
    userAnswer: [],
    userChap: []
}
// Работа функции чтобы проверяло правильность ответа и выдавало умный или нет
function oprosCheck(){

}
function testCheck(){

}


async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData);
    let category = jsonData.category
    if (category == "opros") {
      oprosCheck()
    }else if(category == "test"){
      testCheck()
    }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}
loadData();

console.log(storage)
// добавить(недоспелый банан)


document.querySelector('.more').addEventListener('click',()=>{    window.location = "http://127.0.0.1:5500/newartema.html"})