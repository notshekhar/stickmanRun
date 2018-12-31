class Pipe {
  constructor(canvas, color) {
    this.lw = canvas.width
    this.lh = canvas.height/2
    this.x = math.random(this.lw, this.lw+this.lw/5)
    this.uy = math.random(this.lh/2, this.lh-20)
    this.lhy = this.lh - this.uy
    this.dy = math.random(40, this.lh/2)
    this.width = math.random(10, 35)
    this.color = color
    this.v = 3
  }
  showUp(ctx){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.uy, this.width, this.lhy)
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
    if(this.x+this.width < 0){
      return true
    }
  }
  upHits(stickman){
    if(stickman.uy>this.uy){
      if(stickman.x>this.x && stickman.x<(this.x+this.width)){
        return true
      }
    }
  }
  downHits(stickman){
    // console.log(stickman.dy, this.lh+this.dy)
    if(stickman.dy<this.lh+this.dy){
      if(stickman.x>this.x && stickman.x<(this.x+this.width)){
        return true
      }
    }
  }
}
