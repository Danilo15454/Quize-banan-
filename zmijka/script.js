export class PlayerHead{

    constructor(x, y) {
        this x = x
        this y = y
        this size = 30
        this speed = 5
    }
    move(keys) {
        if (keys['ArrowUp']) this y -= this.speed
        if (keys['ArrowDown']) this y += this.speed
        if (keys['ArrowLeft']) this x -= this.speed
        if (keys['ArrowRight']) this x += this.speed
    }
    draw(ctx){
        ctx.fillStyle = "blue"
        ctx.fillRect(this.x,this.y,this.size,this.size)
    }
}