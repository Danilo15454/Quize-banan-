const container = document.querySelector('#cards')
function createCard({title, text}){
    const card = document.createElement('div')
    card.classList.add('card')

    const h3 = document.createElement('h3')
    h3.classList.add('card_title')
    h3.textContent = title
    
    const p = document.createElement('p')
    p.classList.add('card_title')
    p.textContent = text
   
    card.appendChild(h3)
    card.appendChild(p)
    return card
    
} 


async function init() {
    try {
        const res = await fetch('./data.json')
        const data = await res.json()
        data.items.forEach(item => {
            container.appendChild(createCard(item))
        });
    }catch (error){
        console.error(error)
    }
       

}

init()

