let rows = document.querySelectorAll("tr")
let cells = []

// создаём массив клеток
rows.forEach(row=>{
    cells.push([...row.querySelectorAll("td")])
})

let snake = [{x:5,y:5}]
let dir = "right"

// еда
let food = {
    x: Math.floor(Math.random()*cells[0].length),
    y: Math.floor(Math.random()*cells.length)
}

function draw(){

    // очистить поле
    cells.forEach(r=>{
        r.forEach(c=>{
            c.className=""
        })
    })

    // нарисовать змейку
    snake.forEach(s=>{
        cells[s.y][s.x].classList.add("snake")
    })

    // нарисовать еду
    cells[food.y][food.x].classList.add("food")
}

function move(){

    let head = {...snake[0]}

    if(dir==="right") head.x++
    if(dir==="left") head.x--
    if(dir==="up") head.y--
    if(dir==="down") head.y++

    // выход за карту
    if(
        head.x<0 ||
        head.y<0 ||
        head.y>=cells.length ||
        head.x>=cells[0].length
    ){
        alert("Game Over")
        location.reload()
    }

    snake.unshift(head)

    // если съели еду
    if(head.x===food.x && head.y===food.y){

        food = {
            x: Math.floor(Math.random()*cells[0].length),
            y: Math.floor(Math.random()*cells.length)
        }

    }else{
        snake.pop()
    }

    draw()
}

// управление
document.addEventListener("keydown",e=>{

    if(e.key==="ArrowRight") dir="right"
    if(e.key==="ArrowLeft") dir="left"
    if(e.key==="ArrowUp") dir="up"
    if(e.key==="ArrowDown") dir="down"

})

draw()
setInterval(move,200)