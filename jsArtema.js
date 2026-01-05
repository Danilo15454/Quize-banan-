const testName = document.querySelector("#test1")
const testTema = document.querySelector("#tema")
const testAuthor = document.querySelector("#author")
const testPriclad = document.querySelector("#priclad")
async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData);
    testName.textContent = jsonData.nazvanie
    testTema.textContent = jsonData.tema
    testAuthor.textContent = jsonData.author
    testPriclad.textContent = jsonData.priclad

  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

loadData();