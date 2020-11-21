
class bullet{
  constructor(x,y,s,r,e,t){
    this.start = t
    this.end = e
    this.xpos = x
    this.ypos = y
    this.xspeed = s
    this.radius = r
  }
  
  display(){
    fill(75)
    circle(this.xpos,this.ypos,this.radius)
    fill(100)
    circle(this.xpos-0.1*this.radius,this.ypos-0.15*this.radius,0.6*this.radius)
    fill(125)
    circle(this.xpos-0.2*this.radius,this.ypos-0.2*this.radius,0.35*this.radius)
  }
  
  move(){
    if(this.xpos < this.end){
      this.xpos = this.start
    }
    this.xpos += this.xspeed
  }
  
  detectcollision(c){ //als je wordt geraakt ga je dood of verlies je een leven
    if(!(c.xpos + c.width < this.xpos - this.radius || c.xpos > this.xpos + this.radius || c.ypos > this.ypos + this.radius || c.ypos + c.height < this.ypos - this.radius) &&   levens <= 1){
      dead = true;
    } else if(!(c.xpos + c.width < this.xpos - this.radius || c.xpos > this.xpos + this.radius || c.ypos > this.ypos + this.radius || c.ypos + c.height < this.ypos - this.radius)){
     collectedCoins = prevCollected;
     levens -= 1;
     levelsSetup();
     character1.xpos = 10;
     character1.ypos = height - 30 - character1.height;
    }
  }
}

class shooter{
  constructor(x,y,m,s,e){
    this.xGun = x
    this.yGun = y
    this.cube = 3
    this.maxbullets = m
    this.bullets = []
    this.b;
    for(this.b = 0; this.b < this.maxbullets; this.b++){
      this.bullet = new bullet(this.xGun + 15 + this.b*50,this.yGun + 7.5,s,15,e, this.xGun + 15);
      this.bullets.push(this.bullet)
    }
    this.s; this. r = this.bullets.length //variabelen voor for functie in display()
  }
  
  display(){
    //hieronder de code voor het laten zien, bewegen en detecteren van kogels
    for(this.s = 0; this.s < this.r; this.s++){
      this.bullet = this.bullets[this.s]
      this.bullet.display()
      this.bullet.move()
      this.bullet.detectcollision(character1)
    }
    
    //hieronder de code voor het laten zien van het pistool
    noStroke(0)
    fill(0); //zwart pistool
    rect(this.xGun, this.yGun, this.cube*28, this.cube)
    rect(this.xGun, this.yGun+this.cube, this.cube, this.cube)
    rect(this.xGun+21*this.cube, this.yGun+this.cube, this.cube, this.cube)
    rect(this.xGun+25*this.cube, this.yGun+this.cube, this.cube, this.cube*2)
    rect(this.xGun+28*this.cube, this.yGun+this.cube, this.cube*3, this.cube) //5
    rect(this.xGun, this.yGun+2*this.cube, this.cube*18, this.cube)
    rect(this.xGun+this.cube, this.yGun+3*this.cube, this.cube, this.cube)
    rect(this.xGun+3*this.cube, this.yGun+3*this.cube, this.cube, this.cube)
    rect(this.xGun+11*this.cube, this.yGun+3*this.cube, this.cube, this.cube)
    rect(this.xGun+2*this.cube, this.yGun+4*this.cube, this.cube*2, this.cube) //10
    rect(this.xGun+11*this.cube, this.yGun+4*this.cube, this.cube*13, this.cube)
    rect(this.xGun+4*this.cube, this.yGun+5*this.cube, this.cube*7, this.cube)
    rect(this.xGun+21*this.cube, this.yGun+2*this.cube, this.cube*4, this.cube)
    rect(this.xGun+31*this.cube, this.yGun+2*this.cube, this.cube*2, this.cube)
    rect(this.xGun+33*this.cube, this.yGun+3*this.cube, this.cube*2, this.cube) //15
    rect(this.xGun+32*this.cube, this.yGun+4*this.cube, this.cube, this.cube)
    rect(this.xGun+35*this.cube, this.yGun+4*this.cube, this.cube, this.cube)
    rect(this.xGun+24*this.cube, this.yGun+5*this.cube, this.cube*6, this.cube)
    rect(this.xGun+31*this.cube, this.yGun+5*this.cube, this.cube, this.cube)
    rect(this.xGun+24*this.cube, this.yGun+6*this.cube, this.cube, this.cube) //20
    rect(this.xGun+27*this.cube, this.yGun+6*this.cube, this.cube, this.cube)
    rect(this.xGun+29*this.cube, this.yGun+6*this.cube, this.cube*2, this.cube)
    rect(this.xGun+25*this.cube, this.yGun+7*this.cube, this.cube, this.cube)
    rect(this.xGun+28*this.cube, this.yGun+7*this.cube, this.cube, this.cube)
    rect(this.xGun+31*this.cube, this.yGun+7*this.cube, this.cube, this.cube) //25
    rect(this.xGun+26*this.cube, this.yGun+8*this.cube, this.cube*2, this.cube)
    rect(this.xGun+32*this.cube, this.yGun+8*this.cube, this.cube*2, this.cube)
    rect(this.xGun+34*this.cube, this.yGun+9*this.cube, this.cube*2, this.cube)
    rect(this.xGun+36*this.cube, this.yGun+10*this.cube, this.cube*3, this.cube)
    rect(this.xGun+36*this.cube, this.yGun+5*this.cube, this.cube, this.cube) //30
    rect(this.xGun+37*this.cube, this.yGun+6*this.cube, this.cube, this.cube)
    rect(this.xGun+38*this.cube, this.yGun+7*this.cube, this.cube, this.cube)
    rect(this.xGun+39*this.cube, this.yGun+8*this.cube, this.cube, this.cube*2)
      
    noStroke()
    fill(54, 50, 47); //donkergrijs pistool
    rect(this.xGun+this.cube, this.yGun+this.cube, this.cube*17, this.cube)
    rect(this.xGun+2*this.cube, this.yGun+3*this.cube, this.cube, this.cube)    
    rect(this.xGun+12*this.cube, this.yGun+3*this.cube, this.cube*6, this.cube)
      
    noStroke()
    fill(92, 42, 5); //bruin pistool
    rect(this.xGun+4*this.cube, this.yGun+3*this.cube, this.cube*7, this.cube*2)
    rect(this.xGun+22*this.cube, this.yGun+this.cube, this.cube*3, this.cube)
    rect(this.xGun+33*this.cube, this.yGun+4*this.cube, this.cube*2, this.cube)
    rect(this.xGun+31*this.cube, this.yGun+6*this.cube, this.cube, this.cube)
    rect(this.xGun+32*this.cube, this.yGun+5*this.cube, this.cube*4, this.cube*3) //5
    rect(this.xGun+36*this.cube, this.yGun+6*this.cube, this.cube, this.cube)
    rect(this.xGun+36*this.cube, this.yGun+7*this.cube, this.cube*2, this.cube)
    rect(this.xGun+34*this.cube, this.yGun+8*this.cube, this.cube*5, this.cube)
    rect(this.xGun+36*this.cube, this.yGun+9*this.cube, this.cube*3, this.cube)
      
    noStroke()
    fill(201, 198, 195); //lichtgrijs pistool
    rect(this.xGun+18*this.cube, this.yGun+this.cube, this.cube*3, this.cube)
    rect(this.xGun+26*this.cube, this.yGun+this.cube, this.cube*2, this.cube)
      
    noStroke()
    fill(150, 147, 144); //middengrijs pistool
    rect(this.xGun+18*this.cube, this.yGun+2*this.cube, this.cube*3, this.cube*2)
    rect(this.xGun+26*this.cube, this.yGun+2*this.cube, this.cube*5, this.cube)
    rect(this.xGun+26*this.cube, this.yGun+28, this.cube, this.cube)
    rect(this.xGun+21*this.cube, this.yGun+3*this.cube, this.cube*12, this.cube)
    rect(this.xGun+24*this.cube, this.yGun+4*this.cube, this.cube*8, this.cube)
    rect(this.xGun+30*this.cube, this.yGun+5*this.cube, this.cube, this.cube) //5
  }
}