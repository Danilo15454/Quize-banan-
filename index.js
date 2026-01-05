const button1 = document.querySelector('.test1')
const button2 = document.querySelector('.test2')
function firsttest(){
    try {
        const response1 = await fetch('./json.json')
        const jsonData1 = response1.json()
        console.log(jsonData1.questions)
    } catch(error) {
        console.log("eror lol")
    }
}
button1.addEventListener('click', () => {

})

button2.addEventListener('click', () => {

})