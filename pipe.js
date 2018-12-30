class Pipe {
  constructor(canvas, color) {
    this.lw = canvas.width
    this.lh = canvas.height/2
    this.y = Math.random()*this.w
    this.ux = Math.random()*140
    this.dx = Math.random()*((2*this.lh)-140)
    this.width = Math.random()*50
    this.color = color
  }
  showUp(ctx){
    ctx.fillStyle = this.color
    ctx.fillRect(this.ux, this.y, this.lh, this.width)
  }
  showDown(ctx){
    ctx.fillStyle = this.color
    ctx.fillRect(this.lh, this.y, this.dx, this.width)
  }
}
