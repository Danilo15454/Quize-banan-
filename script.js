const voprosBlock = document.querySelector(".vopros")
const answersBlock = document.querySelector(".answers")
 
  async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData.questions);
    let questions = jsonData.questions
    for (let i = 0; i < questions.length; i++) {
      let answers = jsonData.questions[i].answers
      const element = questions[i];
      console.log(element)
    voprosBlock.textContent = questions[i].question
    console.log(answers)
    for (let j = 0; j < answers.length; j++) {
      console.log('jopa')
         const element = answers[j].answers;
         const ans1Block = document.createElement('div')
         ans1Block.classList.add('answer')
         ans1Block.textContent = element
         answersBlock.appendChild(ans1Block)
         console.log(element)
    }
 
    }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

loadData();