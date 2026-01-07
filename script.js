const voprosBlock = document.querySelector(".vopros")
const answersBlock = document.querySelector(".answers")
let counter = 0
  async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData.questions);
    let questions = jsonData.questions
  
  switcher(counter, questions)
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}


loadData();
function switcher(i, questions) {
    let answers = questions[i].answers
      const element = questions[i];
      console.log(element)
    voprosBlock.textContent = questions[i].question
    console.log(answers)
    for (let j = 0; j < answers.length; j++) {
         const element = answers[j].answers;
         const ans1Block = document.createElement('div')
         ans1Block.classList.add('answer')
         ans1Block.textContent = element
         answersBlock.appendChild(ans1Block)
         ans1Block.addEventListener("click", ()=>{
          counter++
          console.log("asdsadas")
          switcher(i, questions)
         })
         console.log(element)
}
}