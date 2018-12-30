let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let stickman1 = new StickMan(canvas, 'black')
let stickman2 = new StickMan(canvas, 'white')


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
}
setInterval(()=>draw(), 1)

window.onkeydown = e =>{
  console.log(e.keyCode)
  if(e.keyCode == 38){
    stickman1.up()
  }else if(e.keyCode == 40){
    stickman2.down()
  }
}
