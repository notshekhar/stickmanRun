let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let stickman1 = new StickMan(canvas, 'black')
let stickman2 = new StickMan(canvas, 'white')
let upPipe = []
let downPipe = []
let pipe1 = new Pipe(canvas, 'black')
let pipe2 = new Pipe(canvas, 'white')
upPipe.push(pipe1)
downPipe.push(pipe2)
let tu = false
let td = false
let totalLifes = 4
let x = 20
let ud = false
let dd = false
let newGame = false
let score = 0
let highScore = 0
if(localStorage.getItem('highScore')){
  highScore = parseInt(localStorage.getItem('highScore'))
}

function draw(){
  //cleaning upper half every time
  ctx.fillStyle = 'white'
  ctx.fillRect(0,0, canvas.width, canvas.height/2)
  //cleaning lower half everytime
  ctx.fillStyle = 'black'
  ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height)

  //pasting in score
  ctx.font = '12px Arial'
  ctx.fillStyle = 'white'
  ctx.fillText(`HI-Score: ${highScore}, Score: ${score}`, canvas.width-150, canvas.height-10)


  //drawing totalLifes
  for(let i=0; i<totalLifes; i++){
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.arc(x, 20, 10, 0, 2*Math.PI)
    ctx.fill()
    x+=30
  }
  x = 20
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
  // pipe1.showUp(ctx)
  // pipe2.showDown(ctx)
  // pipe1.move()
  // pipe2.move()
  for(let i=0; i<upPipe.length; i++){
    if(upPipe[i].offscreen()){
      upPipe.splice(i, 1)
    }
    upPipe[i].showUp(ctx)
    upPipe[i].move()
  }
  for(let i=0; i<downPipe.length; i++){
    if(downPipe[i].offscreen()){
      downPipe.splice(i, 1)
    }
    downPipe[i].showDown(ctx)
    downPipe[i].move()
  }
  upPipe.forEach(pipe=>{
    if(pipe.upHits(stickman1)){
      ud = true
    }
  })
  downPipe.forEach(pipe=>{
    if(pipe.downHits(stickman2)){
      dd = true
    }
  })
  if(totalLifes==0){
    newGame = true
    upPipe = []
    downPipe = []
    // Game over alert
    ctx.font = '50px Arial'
    ctx.fillStyle = 'black'
    ctx.fillText(`Game Over`, canvas.width/5, canvas.width/2)
    if(score >= highScore ){
      highScore = score
      score = 0
      localStorage.setItem('highScore', highScore)
    }
  }else{
    score++
  }
  if(score >= highScore ){
    highScore = score
  }
}
setInterval(()=>draw(), 16)
setInterval(()=>{
  upPipe.push(new Pipe(canvas, 'black'))
  downPipe.push(new Pipe(canvas, 'white'))
}, 1500)
setInterval(()=>{
  if(ud){
    totalLifes--
    ud = false
  }
  if(dd){
    totalLifes--
    dd = false
  }
}, 800)
window.onkeydown = e =>{
  // console.log(e.keyCode)
  if(e.keyCode == 38){
    tu = true
  }else if(e.keyCode == 40){
    td = true
  }
}
canvas.onclick = () =>{
  if(newGame){
    totalLifes = 4
    score = 0
  }
}
