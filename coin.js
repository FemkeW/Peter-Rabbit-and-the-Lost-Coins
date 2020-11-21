class coin{
  constructor(x,y){
    this.xCoin = x; 
    this.yCoin = y; 
    this.cube = 2;
  }
  
  display(){    
    noStroke()  
    fill(148,118,0);  //zwart muntje
    rect(this.xCoin, this.yCoin, this.cube*6, this.cube)
    rect(this.xCoin-2*this.cube, this.yCoin+this.cube, this.cube*2, this.cube)
    rect(this.xCoin+6*this.cube, this.yCoin+this.cube, this.cube*2, this.cube)
    rect(this.xCoin-3*this.cube, this.yCoin+this.cube*2, this.cube, this.cube)
    rect(this.xCoin+8*this.cube, this.yCoin+this.cube*2, this.cube, this.cube) //5
    rect(this.xCoin-4*this.cube, this.yCoin+3*this.cube, this.cube, this.cube*2)
    rect(this.xCoin+9*this.cube, this.yCoin+3*this.cube, this.cube, this.cube*2)
    rect(this.xCoin-5*this.cube, this.yCoin+5*this.cube, this.cube, this.cube*4)
    rect(this.xCoin+10*this.cube, this.yCoin+5*this.cube, this.cube, this.cube*4)
    rect(this.xCoin-4*this.cube, this.yCoin+9*this.cube, this.cube, this.cube*2) //10
    rect(this.xCoin+9*this.cube, this.yCoin+9*this.cube, this.cube, this.cube*2)
    rect(this.xCoin-3*this.cube, this.yCoin+11*this.cube, this.cube, this.cube)
    rect(this.xCoin+8*this.cube, this.yCoin+11*this.cube, this.cube, this.cube)
    rect(this.xCoin-2*this.cube, this.yCoin+12*this.cube, this.cube*2, this.cube)
    rect(this.xCoin+6*this.cube, this.yCoin+12*this.cube, this.cube*2, this.cube) //15
    rect(this.xCoin, this.yCoin+13*this.cube, this.cube*6, this.cube)
    
    noStroke()
    fill(255, 250, 186); //licht geel muntje
    rect(this.xCoin, this.yCoin+this.cube, this.cube*6, this.cube)
    rect(this.xCoin-2*this.cube, this.yCoin+2*this.cube, this.cube*2, this.cube)
    rect(this.xCoin-3*this.cube, this.yCoin+3*this.cube, this.cube, this.cube*2)
    rect(this.xCoin-4*this.cube, this.yCoin+5*this.cube, this.cube, this.cube*4)
    rect(this.xCoin+2*this.cube, this.yCoin+5*this.cube, this.cube*2, this.cube) //5
    rect(this.xCoin+this.cube, this.yCoin+6*this.cube, this.cube, this.cube*3)
    rect(this.xCoin+7*this.cube, this.yCoin+5*this.cube, this.cube, this.cube*5)
    rect(this.xCoin+5*this.cube, this.yCoin+10*this.cube, this.cube*2, this.cube)
    rect(this.xCoin+this.cube, this.yCoin+11*this.cube, this.cube*4, this.cube)
    
    noStroke()
    fill(252, 226, 50); //geel muntje
    rect(this.xCoin, this.yCoin+2*this.cube, this.cube*8, this.cube)
    rect(this.xCoin-2*this.cube, this.yCoin+3*this.cube, this.cube*3, this.cube)
    rect(this.xCoin+5*this.cube, this.yCoin+3*this.cube, this.cube*4, this.cube)
    rect(this.xCoin-2*this.cube, this.yCoin+4*this.cube, this.cube, this.cube)
    rect(this.xCoin+this.cube, this.yCoin+4*this.cube, this.cube*4, this.cube) //5
    rect(this.xCoin+7*this.cube, this.yCoin+4*this.cube, this.cube*2, this.cube)
    rect(this.xCoin-3*this.cube, this.yCoin+5*this.cube, this.cube, this.cube*6)
    rect(this.xCoin-this.cube, this.yCoin+5*this.cube, this.cube*3, this.cube)
    rect(this.xCoin+4*this.cube, this.yCoin+5*this.cube, this.cube*3, this.cube)
    rect(this.xCoin+8*this.cube, this.yCoin+5*this.cube, this.cube, this.cube*4) //10
    rect(this.xCoin-this.cube, this.yCoin+6*this.cube, this.cube*2, this.cube*4)
    rect(this.xCoin+2*this.cube, this.yCoin+6*this.cube, this.cube*2, this.cube*3)
    rect(this.xCoin+5*this.cube, this.yCoin+6*this.cube, this.cube*2, this.cube*3)
    rect(this.xCoin+this.cube, this.yCoin+9*this.cube, this.cube, this.cube*2)
    rect(this.xCoin+4*this.cube, this.yCoin+9*this.cube, this.cube*3, this.cube) //15
    rect(this.xCoin+2*this.cube, this.yCoin+10*this.cube, this.cube*3, this.cube)
    rect(this.xCoin-2*this.cube, this.yCoin+10*this.cube, this.cube, this.cube*2)
    rect(this.xCoin-this.cube, this.yCoin+11*this.cube, this.cube*2, this.cube)
    
    noStroke()
    fill(180, 111, 50); //bruin muntje
    rect(this.xCoin+this.cube, this.yCoin+3*this.cube, this.cube*4, this.cube)
    rect(this.xCoin-this.cube, this.yCoin+4*this.cube, this.cube*2, this.cube)
    rect(this.xCoin+5*this.cube, this.yCoin+4*this.cube, this.cube*2, this.cube)
    rect(this.xCoin-2*this.cube, this.yCoin+5*this.cube, this.cube, this.cube*5)
    rect(this.xCoin+4*this.cube, this.yCoin+6*this.cube, this.cube, this.cube*3) //5
    rect(this.xCoin+9*this.cube, this.yCoin+5*this.cube, this.cube, this.cube*4)
    rect(this.xCoin+2*this.cube, this.yCoin+9*this.cube, this.cube*2, this.cube)
    rect(this.xCoin-this.cube, this.yCoin+10*this.cube, this.cube*2, this.cube)
    rect(this.xCoin+8*this.cube, this.yCoin+9*this.cube, this.cube, this.cube)
    rect(this.xCoin+7*this.cube, this.yCoin+10*this.cube, this.cube*2, this.cube) //10
    rect(this.xCoin+5*this.cube, this.yCoin+11*this.cube, this.cube*3, this.cube)
    rect(this.xCoin, this.yCoin+12*this.cube, this.cube*6, this.cube)   
  }
  
  pickUpLine(c){
    if (!(this.yCoin > c.ypos + c.height ||
        this.xCoin - 5 * this.cube > c.xpos + c.width ||
        c.ypos > this.yCoin + 13 * this.cube ||
       c.xpos > this.xCoin + 10 * this.cube)) { //je pakt een muntje
      this.xCoin = -50;
      collectedCoins ++;
    }
  }
}
