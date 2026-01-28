const voprosBlock = document.querySelector(".vopros")
const answersBlock = document.querySelector(".answers")
const questCounterBlock = document.querySelector(".planka")
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
    console.log(jsonData.questions);
    let questions = jsonData.questions
    console.log(jsonData.questions)
    questCounterBlock.textContent = `${questCounter + 1} / ${questions.length}`
    switcher(questCounter, questions)
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}
loadData();
function switcher(i, questions) {
  answersBlock.textContent = ""
  let answers = questions[questCounter].answers
  const element = questions[questCounter];
  console.log(element)
  voprosBlock.textContent = questions[questCounter].question
  console.log(answers)
  const obj = localStorage.getItem("banani")
  const parse = JSON.parse(obj)
  for (let j = 0; j < answers.length; j++) {
    const element = answers[j].answers;
    const ans1Block = document.createElement('div')
    ans1Block.classList.add('answer')
    ans1Block.textContent = element
    answersBlock.appendChild(ans1Block)
    ans1Block.addEventListener("click", () => {
      console.log(ans1Block.textContent)
      parse.userAnswer[i] = ans1Block.textContent
      localStorage.setItem("banani", JSON.stringify(parse))
      questCounter++
      questCounterBlock.textContent = `${questCounter + 1} / ${questions.length}`
      switcher(i, questions)
    })
  }
}
console.log(storage)