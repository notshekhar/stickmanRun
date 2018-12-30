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
    this.da = 0.9
    this.ua = -0.9
    this.jumpLimit = this.r+140
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
  down(tf){
    if(tf){
      this.dy += this.v
      this.v += this.da
      if(this.dy>=2*this.lh-this.jumpLimit){
        this.da = -0.9
      }
    }
  }
  up(tf){
    if(tf){
      this.uy += this.v
      this.v += this.ua
      if(this.uy<=this.jumpLimit){
        this.ua = 0.9
      }
    }
  }


}
