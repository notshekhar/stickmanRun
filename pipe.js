class Pipe {
  constructor(canvas, color) {
    this.lw = canvas.width
    this.lh = canvas.height/2
    this.x = math.random(this.lw, this.lw+this.lw/3)
    this.uy = math.random(this.lh/2, this.lh-20)
    this.dy = math.random(20, this.lh/2)
    this.width = math.random(10, 40)
    this.color = color
    this.v = 3
  }
  showUp(ctx){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.uy, this.width, this.lh-this.uy)
    console.log()
  }
  showDown(ctx){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.lh, this.width, this.dy)
  }
  move(){
    this.x -= this.v
  }
  offscreen(){
    if(this.x < 0){
      return true
    }
  }
}
