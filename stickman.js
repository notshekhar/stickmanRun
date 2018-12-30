class StickMan {
  constructor(canvas, color) {
    this.lw = canvas.width
    this.lh = canvas.height/2
    this.color = color
    this.r = 10
    this.x = this.lw/6
    this.uy = this.lh-this.r
    this.dy = this.lh+this.r
    this.v = 0
    this.a = 0.9
    this.jumpLimit = this.r+100
  }
  showUp(ctx){
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.uy, this.r, 0, 2*Math.PI)
    ctx.fill()
  }
  showDown(ctx){
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.dy, this.r, 0, 2*Math.PI)
    ctx.fill()
  }
  down(){
    this.dy += this.v
    this.v += this.a
    if(this.dy>=this.lh+this.jumpLimit){
      this.a = -0.9
    }else if(this.dy < this.lh+this.r){
      this.v = 0
      this.dy = this.lh+this.r
      this.a = 0
    }
  }
  up(){
    this.a = -0.9
    this.dy += this.v
    this.v += this.a
    if(this.dy<=this.lh-this.jumpLimit){
      this.a = 0.9
    }else if(this.dy > this.lh-this.r){
      this.v = 0
      this.dy = this.lh-this.r
      this.a = 0
    }
  }
}
