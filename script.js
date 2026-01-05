const voprosBlock = document.querySelector(".vopros")
const answersBlock = document.querySelector(".answers")
async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData.questions);
    let questions = jsonData.questions
    voprosBlock.textContent = questions[0].question
    const ans1Block = document.createElement('div')
    ans1Block.classList.add('answer')
    ans1Block.textContent = questions[0].answers[0].answers
    answersBlock.appendChild(ans1Block)
    for (let i = 0; i < questions.length; i++) {
      const element = questions[i];
      console.log(element)
    }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

loadData();