const testName = document.querySelector(".name")
const testTema = document.querySelector(".tema")
const testAuthor = document.querySelector(".author")
const testPriclad = document.querySelector(".priclad")
const classes = ["nazvanie", "tema", "author", "priclad"]
function createBlock({nazvanie, tema, author, priclad}){
  const container = document.querySelector(".container")
  container.classList.add('container')

  const h3 = document.createElement('h3')
  h3.classList.add('nazvanie')
  h3.textContent = nazvanie

  container.appendChild(h3)
  for (let i = 0; i < 3; i++) {
    const p = document.createElement('p')
    p.classList.add(classes[i])
    p.textContent = "muha loh"
    container.appendChild(p)
  }
}
async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json();

    const test = jsonData.tests[0]

    testName.textContent = test.nazvanie
    testTema.textContent = test.tema
    testAuthor.textContent = test.author
    testPriclad.textContent = test.priclad

      createBlock(jsonData.tests[0])    //посмотреть в тимбилах как сделать карточку через хтмл 
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

loadData();
