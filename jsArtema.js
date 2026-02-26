const testName = document.querySelector(".name")
const testTema = document.querySelector(".tema")
const testAuthor = document.querySelector(".author")
const testPriclad = document.querySelector(".priclad")
const container = document.querySelector(".main")

let name = localStorage.getItem("banani");
parse = JSON.parse(name)
parse.userAnswer = []
localStorage.setItem("banani", JSON.stringify(parse))


const classes = ["nazvanie", "tema", "author", "priclad"]
function createBlock({ nazvanie, tema, author, priclad, shortName }) {
  const newCard = document.createElement('a')
  newCard.href = `http://127.0.0.1:5500/index.html?type=${shortName}`
  newCard.classList.add('test1')
  const newCardInside = document.createElement('div')
  newCardInside.classList.add('text')
  newCard.appendChild(newCardInside)
  const h3 = document.createElement('h3')
  h3.classList.add('name')
  h3.textContent = nazvanie
  newCardInside.appendChild(h3)
  const temablock = document.createElement('p')
  temablock.classList.add("tema")
  temablock.textContent = tema
  newCardInside.appendChild(temablock)
  const authorblock = document.createElement('p')
  authorblock.textContent = author
  authorblock.classList.add("author")
  newCardInside.appendChild(authorblock)
  const pricladBlock = document.createElement('p')
  pricladBlock.classList.add("priclad")
  pricladBlock.textContent = priclad
  newCardInside.appendChild(pricladBlock)
  container.appendChild(newCard)

  const but = document.createElement('button')
  but.textContent = "Перейти"
  newCard.appendChild(but)
  // Ссылка Передавать какой тест нажат window.location = "http://127.0.0.1:5500/endquest.html?test=banani"}

}
async function loadData() {
  try {
    const response = await fetch('./index.json');
    const jsonData = await response.json();


    jsonData.tests.forEach(element => {
      createBlock(element)
    });
    // testName.textContent = test.nazvanie
    // testTema.textContent = test.tema
    // testAuthor.textContent = test.author
    // testPriclad.textContent = test.priclad

    //посмотреть в тимбилах как сделать карточку через хтмл 
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

loadData();
