const button1 = document.querySelector('.test1')
const button2 = document.querySelector('.test2')
async function firsttest(){
    try {
        const response = await fetch('./json.json');
        const jsonData = await response.json(); // Parses the response into a JS object
        console.log(jsonData.questions);
    } catch(error) {
        console.log("eror lol")
    }
}

async function sectest(){
    try {
        const response = await fetch('./json2.json');
        const jsonData = await response.json(); // Parses the response into a JS object
        console.log(jsonData.questions);
    } catch(error) {
        console.log("eror lol 1")
    }
}
button1.addEventListener('click', () => {
firsttest()
})

button2.addEventListener('click', () => {
sectest()
})