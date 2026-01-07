const button1 = document.querySelector('.test1')
const button2 = document.querySelector('.test2')
async function firsttest(){
    try {
        const response = await fetch('./json.json')
        const jsonData = response.json()
        console.log(jsonData.questions)
    } catch(error) {
        console.log("eror lol")
    }
}
button1.addEventListener('click', () => {
firsttest()
})

button2.addEventListener('click', () => {

})