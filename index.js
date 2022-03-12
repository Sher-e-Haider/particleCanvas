const canvas = document.getElementById('canvas1')
const c = canvas.getContext('2d')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
window.addEventListener('resize',()=>{
   
    
const mouse = {
    x:null,
    y:null
}


})

// canvas1.addEventListener('mousemove',function(e){
//     mouse.x=e.x
//     mouse.y=e.y

    
// })
// function drawCircle(){
//     c.fillStyle='red';
//     c.beginPath();
//     c.arc(mouse.x,mouse.y,39,0,2*Math.PI);
//     c.closePath();
//     c.fill();
// }

class Particle{
    constructor(){
        this.x=Math.random()*canvas.width+10
        this.y=Math.random()*canvas.height
        this.r=Math.random()*1
        this.speedX=Math.random()*2-1.2
        this.speedY=Math.random()*2-1.1
    }

    draw(){
        c.fillStyle='red';
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,2*Math.PI);
        c.closePath();
        c.fill();
       // console.log(this.p,this.q);
    }
    move(){
        this.x+=this.speedX
        this.y+=this.speedY
        if(this.x>=canvas.width){
            this.speedX*=-1
        }
        if(this.x<=0+4){
            this.speedX*=-1
        }
        if(this.y>=canvas.height){
            this.speedY*=-1
        }
        if(this.y<=0+14){
            this.speedY*=-1
        }
        
    }
}
const l=[]
for(let i=0;i<500;i++){
    l.push(new Particle())
}

console.log(l);
function handleParticle(){
    for(let i=0;i<500;i++){
        l[i].move()
        l[i].draw()
    }
}
// obj =new Particle()
// obj1 =new Particle()
// obj.draw()
// obj1.draw()

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height)
    handleParticle()
    requestAnimationFrame(animate)
}
animate()