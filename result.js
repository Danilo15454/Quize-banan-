let URLparams = new URLSearchParams(window.location.search)
let bananaType = URLparams.get('banan')
console.log(bananaType)
const bananaTypeBlock = document.querySelector('.tupoe')
if (bananaType) {
    bananaTypeBlock.textContent = bananaType
}
storage = window.localStorage
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


document.querySelector('.more').addEventListener('click',()=>{    window.location = "http://127.0.0.1:5500/newartema.html"})