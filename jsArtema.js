const testName = document.querySelector(".name")
const testTema = document.querySelector(".tema")
const testAuthor = document.querySelector(".author")
const testPriclad = document.querySelector(".priclad")
const container = document.querySelector(".main")
const classes = ["nazvanie", "tema", "author", "priclad"]
function createBlock({nazvanie, tema, author, priclad}){
  console.log(nazvanie)
  console.log(tema)
  const newCard = document.createElement('div')
  newCard.classList.add('test1')
  const h3 = document.createElement('h3')
  h3.classList.add('nazvanie')
  h3.textContent = nazvanie

  newCard.appendChild(h3)
  container.appendChild(newCard)
  // Ссылка Передавать какой тест нажат window.location = "http://127.0.0.1:5500/endquest.html?test=banani"}
  for (let i = 0; i < 3; i++) {
    const p = document.createElement('p')
    p.classList.add(classes[i])
    p.textContent = "muha loh"
    newCard.appendChild(p)
  }
}
async function loadData() {
  try {
    const response = await fetch('./index.json');
    const jsonData = await response.json();

    const test = jsonData.tests[0]

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
