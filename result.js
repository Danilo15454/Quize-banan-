const voprosBlock = document.querySelector(".vopros")
const answersBlock = document.querySelector(".answers")
const planka = document.querySelector(".planka")
const questCounterBlock = document.querySelector(".countert")
const tctBlock = document.querySelector(".tct")
storage = window.localStorage
let questCounter = 0
const test = {
    name: "test",
    userAnswer: [],
    userChap: []
}

async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData);
    let category = jsonData.category
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}
loadData();

console.log(storage)
// добавить(недоспелый банан)
tctBlock.addEventListener('click',
  function (){window.location = "http://127.0.0.1:5500/endquest.html?banan=nespeliy"}
)

