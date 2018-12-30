let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let stickman1 = new StickMan(canvas, 'black')
let stickman2 = new StickMan(canvas, 'white')
let upPipe = []
let downPipe = []
let pipe1 = new Pipe(canvas, 'black')
let pipe2 = new Pipe(canvas, 'white')
let tu = false
let td = false

function draw(){
  //cleaning upper half every time
  ctx.fillStyle = 'white'
  ctx.fillRect(0,0, canvas.width, canvas.height/2)
  //cleaning lower half everytime
  ctx.fillStyle = 'black'
  ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height)

  //drawing balls and everything else
  stickman1.showUp(ctx)
  stickman2.showDown(ctx)
  stickman1.up(tu)
  if(stickman1.uy > stickman1.lh-stickman1.r){
    tu = false
    stickman1.v = 0
    stickman1.ua = -2
    stickman1.uy = stickman1.lh-stickman1.r
  }
  stickman2.down(td)
  if(stickman2.dy < stickman2.lh+stickman2.r){
    td = false
    stickman2.v = 0
    stickman2.da = 2
    stickman2.dy = stickman2.lh+stickman2.r
  }
  pipe1.showUp(ctx)
  pipe2.showDown(ctx)
  pipe1.move()
  pipe2.move()
}
setInterval(()=>draw(), 16)

window.onkeydown = e =>{
  // console.log(e.keyCode)
  if(e.keyCode == 38){
    tu = true
  }else if(e.keyCode == 40){
    td = true
  }
}
