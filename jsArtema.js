const testName = document.querySelectorAll(".name")
const testTema = document.querySelectorAll(".tema")
const testAuthor = document.querySelectorAll(".author")
const testPriclad = document.querySelectorAll(".priclad")
async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData);
    testName.textContent = jsonData.nazvanie
    testTema.textContent = jsonData.tema
    testAuthor.textContent = jsonData.author
    testPriclad.textContent = jsonData.priclad
    testName.textContent = jsonData.nazvanie1
    testTema.textContent = jsonData.tema1
    testAuthor.textContent = jsonData.author1
    testPriclad.textContent = jsonData.priclad1

  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

loadData();