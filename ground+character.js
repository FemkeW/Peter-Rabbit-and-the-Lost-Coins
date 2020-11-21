class ground {
  constructor(h,w,x,y,m,sx,sy,l,r,u,d){
    this.height = h
    this.width = w
    this.xpos = x
    this.ypos = y
    
    this.cube = 30/9
    
    this.moving = m
    if(this.moving){
      this.xspeed = sx
      this.yspeed = sy
      this.left = l
      this.right = r
      this.up = u
      this.down = d
    }
    
    this.g; this.w = this.width/30;  //variabelen voor for functie in display()
  }
   
  displayGrass(x,y){
    noStroke()
    fill(0,100,0); //donkergroen
    rect(x, y+4*this.cube, this.cube, this.cube)
    rect(x+this.cube, y+5*this.cube, this.cube, this.cube)
    rect(x+2*this.cube, y+4*this.cube, this.cube*2, this.cube)
    rect(x+4*this.cube, y+3*this.cube, this.cube, this.cube*2) // V
    rect(x+5*this.cube, y+4*this.cube, this.cube*3, this.cube) //5
    rect(x+6*this.cube, y+5*this.cube, this.cube, this.cube)
    rect(x+8*this.cube, y+4*this.cube, this.cube, this.cube)
    
      noStroke()
    fill(34,139,34); //lichtgroen
    rect(x, y+3*this.cube, this.cube, this.cube)
    rect(x+this.cube, y+4*this.cube, this.cube, this.cube)
    rect(x, y+2*this.cube, this.cube*4, this.cube*2)
    rect(x+3*this.cube, y+2*this.cube, this.cube*3, this.cube) //5 V
    rect(x+5*this.cube, y+2*this.cube, this.cube*2, this.cube*2)
    rect(x+7*this.cube, y+3*this.cube, this.cube*2, this.cube)
    rect(x+6*this.cube, y+4*this.cube, this.cube, this.cube)
    rect(x+8*this.cube, y+2*this.cube, this.cube, this.cube)

  

    noStroke()
    fill(136, 255,122); //lichtlichtgroen
    rect(x, y+this.cube, this.cube*6, this.cube)
    rect(x+2*this.cube, y+2*this.cube, this.cube, this.cube)
    rect(x+6*this.cube, y+this.cube, this.cube*3, this.cube)
    rect(x+7*this.cube, y+2*this.cube, this.cube, this.cube)
  }
  
  display() {
    noStroke();
    fill(185,97,169);
    rect(this.xpos, this.ypos, this.width, this.height,1);
    fill(168, 90, 237)
    rect(this.xpos + this.width - 10, this.ypos, 10, this.height, 1);
    if(this.moving){ //we gaan bewegennn
      if(this.xspeed != 0 && (this.xpos < this.left || this.xpos + this.width > this.right)){
        this.xspeed = -this.xspeed;
      }
      if(this.yspeed != 0 && (this.ypos < this.up || this.ypos + this.height > this.down)){
        this.yspeed = -this.yspeed;
      }
      this.xpos += this.xspeed; //heen en weer
      this.ypos += this.yspeed; //op en neer
    }
    
    for(this.g = 0; this.g < this.w; this.g++){
      if(!this.moving){
        this.displayGrass(this.xpos + this.g*30, this.ypos-this.cube);
      } else{ //het gras beweegt mee als de grond ook beweegt
        this.displayGrass(this.xpos + this.g*30-this.xspeed, this.ypos-this.cube-this.yspeed);
    }
  }   
}
}

class character {
  constructor(x){
    this.cube = 60/27
    this.height = 27 * this.cube
    this.width = 17 *  this.cube     
    this.xpos = x + 7 * this.cube
    this.ypos = height - 30 - this.height
    
    this.yspeed = 0
    this.xspeed = 0
    this.prevxspeed = 1
    
    this.i; this.j; this.k; this.l; //variabelen voor for functies in move()
  }
  
  displayRight(){
    noStroke()     
    fill(243,201,105); //geel konijn hoofd
    rect(this.xpos+8*this.cube, this.ypos+this.cube, this.cube, 6*this.cube);
    rect(this.xpos+10*this.cube, this.ypos+this.cube, this.cube*2, this.cube*9)
    rect(this.xpos+9*this.cube, this.ypos+this.cube*7, this.cube, this.cube*2)
    rect(this.xpos+13*this.cube, this.ypos+6*this.cube, this.cube, this.cube)
    rect(this.xpos+12*this.cube, this.ypos+7*this.cube, this.cube*3, this.cube) //5
    rect(this.xpos+12*this.cube, this.ypos+8*this.cube, this.cube, this.cube)
    rect(this.xpos+14*this.cube, this.ypos+8*this.cube, this.cube, this.cube)
    rect(this.xpos+11*this.cube, this.ypos+10*this.cube, this.cube, this.cube)
    rect(this.xpos+12*this.cube, this.ypos+9*this.cube, this.cube*3, this.cube*2)

    //geel konijn handen
    rect(this.xpos+19*this.cube, this.ypos+14*this.cube, this.cube, this.cube)
    rect(this.xpos+15*this.cube, this.ypos+19*this.cube, this.cube, this.cube)

    //geel konijn benen
    rect(this.xpos+7*this.cube, this.ypos+23*this.cube, this.cube*3, this.cube*2) //12
    rect(this.xpos+7*this.cube, this.ypos+25*this.cube, this.cube*3, this.cube)
    rect(this.xpos+this.cube, this.ypos+24*this.cube, this.cube*3, this.cube*2)
    rect(this.xpos+4*this.cube, this.ypos+23*this.cube, this.cube, this.cube*2)//15
    rect(this.xpos+5*this.cube, this.ypos+22*this.cube, this.cube*2, this.cube*2)
    rect(this.xpos+5*this.cube, this.ypos+21*this.cube, this.cube, this.cube)
    rect(this.xpos+10*this.cube, this.ypos+23*this.cube, this.cube, this.cube)
    rect(this.xpos+12*this.cube, this.ypos+26*this.cube, this.cube, this.cube)

    fill(100,206,232); //blauw konijn
    rect(this.xpos+9*this.cube, this.ypos+10*this.cube, this.cube, this.cube)
    rect(this.xpos+10*this.cube, this.ypos+11*this.cube, this.cube, this.cube)
    rect(this.xpos+9*this.cube, this.ypos+12*this.cube, this.cube*2, this.cube*2)
    rect(this.xpos+9*this.cube, this.ypos+14*this.cube, this.cube*4, this.cube)
    rect(this.xpos+7*this.cube, this.ypos+16*this.cube, this.cube, this.cube)//5
    rect(this.xpos+8*this.cube, this.ypos+15*this.cube, this.cube*7, this.cube*2)
    rect(this.xpos+15*this.cube, this.ypos+15*this.cube, this.cube, this.cube)
    rect(this.xpos+15*this.cube, this.ypos+14*this.cube, this.cube*2, this.cube)
    rect(this.xpos+16*this.cube, this.ypos+13*this.cube, this.cube, this.cube)
    rect(this.xpos+14*this.cube, this.ypos+17*this.cube, this.cube*2, this.cube)//10
    rect(this.xpos+14*this.cube, this.ypos+18*this.cube, this.cube, this.cube)
    rect(this.xpos+12*this.cube, this.ypos+18*this.cube, this.cube*2, this.cube*2)
    rect(this.xpos+12*this.cube, this.ypos+20*this.cube, this.cube, this.cube)
    rect(this.xpos+3*this.cube, this.ypos+21*this.cube, this.cube, this.cube)
    rect(this.xpos+4*this.cube, this.ypos+20*this.cube, this.cube, this.cube)//15
    rect(this.xpos+5*this.cube, this.ypos+18*this.cube, this.cube, this.cube*3)
    rect(this.xpos+6*this.cube, this.ypos+17*this.cube, this.cube*6, this.cube*5)
    rect(this.xpos+7*this.cube, this.ypos+22*this.cube, this.cube, this.cube)
    rect(this.xpos+10*this.cube, this.ypos+22*this.cube, this.cube, this.cube)

    fill(0);//zwart konijn hoofd
    rect(this.xpos+7*this.cube, this.ypos, this.cube, this.cube)
    rect(this.xpos+6*this.cube, this.ypos+2*this.cube, this.cube, this.cube)
    rect(this.xpos+10*this.cube, this.ypos, this.cube, this.cube)
    rect(this.xpos+12*this.cube, this.ypos+2*this.cube, this.cube, this.cube)
    rect(this.xpos+9*this.cube, this.ypos+5*this.cube, this.cube, this.cube*2)//5
    rect(this.xpos+12*this.cube, this.ypos+4*this.cube, this.cube, this.cube*2)
    rect(this.xpos+8*this.cube, this.ypos+8*this.cube, this.cube, this.cube)
    rect(this.xpos+14*this.cube, this.ypos+6*this.cube, this.cube, this.cube)
    rect(this.xpos+13*this.cube, this.ypos+8*this.cube, this.cube, this.cube)
    rect(this.xpos+15*this.cube, this.ypos+7*this.cube, this.cube, this.cube*2)//10
    rect(this.xpos+9*this.cube, this.ypos+11*this.cube, this.cube, this.cube)
    rect(this.xpos+11*this.cube, this.ypos+11*this.cube, this.cube, this.cube)
    rect(this.xpos+11*this.cube, this.ypos+12*this.cube, this.cube*2, this.cube*2)
    rect(this.xpos+13*this.cube, this.ypos+13*this.cube, this.cube, this.cube)

    // zwart konijn midden
    rect(this.xpos+15*this.cube, this.ypos+13*this.cube, this.cube, this.cube)//15
    rect(this.xpos+17*this.cube, this.ypos+13*this.cube, this.cube, this.cube)
    rect(this.xpos+17*this.cube, this.ypos+14*this.cube, this.cube*2, this.cube)
    rect(this.xpos+16*this.cube, this.ypos+15*this.cube, this.cube, this.cube)
    rect(this.xpos+15*this.cube, this.ypos+16*this.cube, this.cube, this.cube)
    rect(this.xpos+5*this.cube, this.ypos+16*this.cube, this.cube, this.cube*2)//20
    rect(this.xpos+12*this.cube, this.ypos+17*this.cube, this.cube*2, this.cube)
    rect(this.xpos+15*this.cube, this.ypos+18*this.cube, this.cube, this.cube)
    rect(this.xpos+this.cube, this.ypos+20*this.cube, this.cube, this.cube*2);
    rect(this.xpos+4*this.cube, this.ypos+21*this.cube, this.cube, this.cube);
    rect(this.xpos+8*this.cube, this.ypos+22*this.cube, this.cube*2, this.cube); //25
    rect(this.xpos+12*this.cube, this.ypos+21*this.cube, this.cube, this.cube);
    rect(this.xpos+11*this.cube, this.ypos+22*this.cube, this.cube*2, this.cube);

    // zwart konijn benen
    rect(this.xpos, this.ypos+26*this.cube, this.cube, this.cube*2); //28
    rect(this.xpos+7*this.cube, this.ypos+26*this.cube, this.cube, this.cube);
    rect(this.xpos+11*this.cube, this.ypos+26*this.cube, this.cube, this.cube);//30
    rect(this.xpos+13*this.cube, this.ypos+26*this.cube, this.cube, this.cube);

    fill(251,243,198); //wit konijn 
    rect(this.xpos+7*this.cube, this.ypos+this.cube, this.cube, this.cube*6); //1
    rect(this.xpos+12*this.cube, this.ypos+6*this.cube, this.cube, this.cube);
    rect(this.xpos+8*this.cube, this.ypos+7*this.cube, this.cube, this.cube);
    rect(this.xpos+9*this.cube, this.ypos+9*this.cube, this.cube, this.cube);
    rect(this.xpos+10*this.cube, this.ypos+10*this.cube, this.cube, this.cube); //5
    rect(this.xpos+8*this.cube, this.ypos+11*this.cube, this.cube, this.cube);
    rect(this.xpos+12*this.cube, this.ypos+11*this.cube, this.cube*2, this.cube);
    rect(this.xpos+7*this.cube, this.ypos+14*this.cube, this.cube, this.cube);
    rect(this.xpos+6*this.cube, this.ypos+15*this.cube, this.cube, this.cube);
    rect(this.xpos+4*this.cube, this.ypos+17*this.cube, this.cube, this.cube); //10
    rect(this.xpos+2*this.cube, this.ypos+18*this.cube, this.cube*2, this.cube);
    rect(this.xpos+2*this.cube, this.ypos+20*this.cube, this.cube, this.cube*3);
    rect(this.xpos+3*this.cube, this.ypos+22*this.cube, this.cube, this.cube);

    // wit benen
    rect(this.xpos+2*this.cube, this.ypos+23*this.cube, this.cube*2, this.cube);
    rect(this.xpos+this.cube, this.ypos+26*this.cube, this.cube, this.cube); //15
    rect(this.xpos+10*this.cube, this.ypos+25*this.cube, this.cube, this.cube);
    rect(this.xpos+12*this.cube, this.ypos+25*this.cube, this.cube, this.cube);

}
  
  displayLeft(){
    noStroke()     
    fill(243,201,105); //geel konijn hoofd
    rect(this.xpos+11*this.cube, this.ypos+this.cube, -this.cube, 6*this.cube);
    rect(this.xpos+9*this.cube, this.ypos+this.cube, -this.cube*2, this.cube*9)
    rect(this.xpos+10*this.cube, this.ypos+this.cube*7, -this.cube, this.cube*2)
    rect(this.xpos+6*this.cube, this.ypos+6*this.cube, -this.cube, this.cube)
    rect(this.xpos+7*this.cube, this.ypos+7*this.cube, -this.cube*3, this.cube) //5
    rect(this.xpos+7*this.cube, this.ypos+8*this.cube, -this.cube, this.cube)
    rect(this.xpos+5*this.cube, this.ypos+8*this.cube, -this.cube, this.cube)
    rect(this.xpos+8*this.cube, this.ypos+10*this.cube, -this.cube, this.cube)
    rect(this.xpos+7*this.cube, this.ypos+9*this.cube, -this.cube*3, this.cube*2)

    //geel konijn handen
    rect(this.xpos+0*this.cube, this.ypos+14*this.cube, -this.cube, this.cube)
    rect(this.xpos+4*this.cube, this.ypos+19*this.cube, -this.cube, this.cube)

    //geel konijn benen
    rect(this.xpos+12*this.cube, this.ypos+23*this.cube, -this.cube*3, this.cube*2) //12
    rect(this.xpos+12*this.cube, this.ypos+25*this.cube, -this.cube*3, this.cube)
    rect(this.xpos+18*this.cube, this.ypos+24*this.cube, -this.cube*3, this.cube*2)
    rect(this.xpos+15*this.cube, this.ypos+23*this.cube, -this.cube, this.cube*2)//15
    rect(this.xpos+14*this.cube, this.ypos+22*this.cube, -this.cube*2, this.cube*2)
    rect(this.xpos+14*this.cube, this.ypos+21*this.cube, -this.cube, this.cube)
    rect(this.xpos+9*this.cube, this.ypos+23*this.cube, -this.cube, this.cube)
    rect(this.xpos+7*this.cube, this.ypos+26*this.cube, -this.cube, this.cube)

    fill(100,206,232); //blauw konijn
    rect(this.xpos+10*this.cube, this.ypos+10*this.cube, -this.cube, this.cube)
    rect(this.xpos+9*this.cube, this.ypos+11*this.cube, -this.cube, this.cube)
    rect(this.xpos+10*this.cube, this.ypos+12*this.cube, -this.cube*2, this.cube*2)
    rect(this.xpos+10*this.cube, this.ypos+14*this.cube, -this.cube*4, this.cube)
    rect(this.xpos+12*this.cube, this.ypos+16*this.cube, -this.cube, this.cube)//5
    rect(this.xpos+11*this.cube, this.ypos+15*this.cube, -this.cube*7, this.cube*2)
    rect(this.xpos+4*this.cube, this.ypos+15*this.cube, -this.cube, this.cube)
    rect(this.xpos+4*this.cube, this.ypos+14*this.cube, -this.cube*2, this.cube)
    rect(this.xpos+3*this.cube, this.ypos+13*this.cube, -this.cube, this.cube)
    rect(this.xpos+5*this.cube, this.ypos+17*this.cube, -this.cube*2, this.cube)//10
    rect(this.xpos+5*this.cube, this.ypos+18*this.cube, -this.cube, this.cube)
    rect(this.xpos+7*this.cube, this.ypos+18*this.cube, -this.cube*2, this.cube*2)
    rect(this.xpos+7*this.cube, this.ypos+20*this.cube, -this.cube, this.cube)
    rect(this.xpos+16*this.cube, this.ypos+21*this.cube, -this.cube, this.cube)
    rect(this.xpos+15*this.cube, this.ypos+20*this.cube, -this.cube, this.cube)//15
    rect(this.xpos+14*this.cube, this.ypos+18*this.cube, -this.cube, this.cube*3)
    rect(this.xpos+13*this.cube, this.ypos+17*this.cube, -this.cube*6, this.cube*5)
    rect(this.xpos+12*this.cube, this.ypos+22*this.cube, -this.cube, this.cube)
    rect(this.xpos+9*this.cube, this.ypos+22*this.cube, -this.cube, this.cube)

    fill(0);//zwart konijn hoofd
    rect(this.xpos+12*this.cube, this.ypos, -this.cube, this.cube)
    rect(this.xpos+13*this.cube, this.ypos+2*this.cube, -this.cube, this.cube)
    rect(this.xpos+9*this.cube, this.ypos, -this.cube, this.cube)
    rect(this.xpos+7*this.cube, this.ypos+2*this.cube, -this.cube, this.cube)
    rect(this.xpos+10*this.cube, this.ypos+5*this.cube, -this.cube, this.cube*2)//5
    rect(this.xpos+7*this.cube, this.ypos+4*this.cube, -this.cube, this.cube*2)
    rect(this.xpos+11*this.cube, this.ypos+8*this.cube, -this.cube, this.cube)
    rect(this.xpos+5*this.cube, this.ypos+6*this.cube, -this.cube, this.cube)
    rect(this.xpos+6*this.cube, this.ypos+8*this.cube, -this.cube, this.cube)
    rect(this.xpos+4*this.cube, this.ypos+7*this.cube, -this.cube, this.cube*2)//10
    rect(this.xpos+10*this.cube, this.ypos+11*this.cube, -this.cube, this.cube)
    rect(this.xpos+8*this.cube, this.ypos+11*this.cube, -this.cube, this.cube)
    rect(this.xpos+8*this.cube, this.ypos+12*this.cube, -this.cube*2, this.cube*2)
    rect(this.xpos+6*this.cube, this.ypos+13*this.cube, -this.cube, this.cube)

    // zwart konijn midden
    rect(this.xpos+4*this.cube, this.ypos+13*this.cube, -this.cube, this.cube)//15
    rect(this.xpos+2*this.cube, this.ypos+13*this.cube, -this.cube, this.cube)
    rect(this.xpos+2*this.cube, this.ypos+14*this.cube, -this.cube*2, this.cube)
    rect(this.xpos+3*this.cube, this.ypos+15*this.cube, -this.cube, this.cube)
    rect(this.xpos+4*this.cube, this.ypos+16*this.cube, -this.cube, this.cube)
    rect(this.xpos+14*this.cube, this.ypos+16*this.cube, -this.cube, this.cube*2)//20
    rect(this.xpos+7*this.cube, this.ypos+17*this.cube, -this.cube*2, this.cube)
    rect(this.xpos+4*this.cube, this.ypos+18*this.cube, -this.cube, this.cube)
    rect(this.xpos+18*this.cube, this.ypos+20*this.cube, -this.cube, this.cube*2);
    rect(this.xpos+15*this.cube, this.ypos+21*this.cube, -this.cube, this.cube);
    rect(this.xpos+11*this.cube, this.ypos+22*this.cube, -this.cube*2, this.cube); //25
    rect(this.xpos+7*this.cube, this.ypos+21*this.cube, -this.cube, this.cube);
    rect(this.xpos+8*this.cube, this.ypos+22*this.cube, -this.cube*2, this.cube);

    // zwart konijn benen
    rect(this.xpos+19*this.cube, this.ypos+26*this.cube, -this.cube, this.cube*2); //28
    rect(this.xpos+12*this.cube, this.ypos+26*this.cube, -this.cube, this.cube);
    rect(this.xpos+8*this.cube, this.ypos+26*this.cube, -this.cube, this.cube);//30
    rect(this.xpos+6*this.cube, this.ypos+26*this.cube, -this.cube, this.cube);

    fill(251,243,198); //wit konijn 
    rect(this.xpos+12*this.cube, this.ypos+this.cube, -this.cube, this.cube*6); //1
    rect(this.xpos+7*this.cube, this.ypos+6*this.cube, -this.cube, this.cube);
    rect(this.xpos+11*this.cube, this.ypos+7*this.cube, -this.cube, this.cube);
    rect(this.xpos+10*this.cube, this.ypos+9*this.cube, -this.cube, this.cube);
    rect(this.xpos+9*this.cube, this.ypos+10*this.cube, -this.cube, this.cube); //5
    rect(this.xpos+11*this.cube, this.ypos+11*this.cube, -this.cube, this.cube);
    rect(this.xpos+7*this.cube, this.ypos+11*this.cube, -this.cube*2, this.cube);
    rect(this.xpos+12*this.cube, this.ypos+14*this.cube, -this.cube, this.cube);
    rect(this.xpos+13*this.cube, this.ypos+15*this.cube, -this.cube, this.cube);
    rect(this.xpos+15*this.cube, this.ypos+17*this.cube, -this.cube, this.cube); //10
    rect(this.xpos+17*this.cube, this.ypos+18*this.cube, -this.cube*2, this.cube);
    rect(this.xpos+17*this.cube, this.ypos+20*this.cube, -this.cube, this.cube*3);
    rect(this.xpos+16*this.cube, this.ypos+22*this.cube, -this.cube, this.cube);

    // wit benen
    rect(this.xpos+17*this.cube, this.ypos+23*this.cube, -this.cube*2, this.cube);
    rect(this.xpos+19*this.cube, this.ypos+26*this.cube, -this.cube, this.cube); //15
    rect(this.xpos+9*this.cube, this.ypos+25*this.cube, -this.cube, this.cube);
    rect(this.xpos+7*this.cube, this.ypos+25*this.cube, -this.cube, this.cube);

  }
  
  display(){ //bepaald welke kant moet worden weergegeven
    if(this.xspeed > 0){
       this.displayRight()
     } else if(this.xspeed < 0){
       this.displayLeft()
     } else{
       if(this.prevxspeed > 0){
         this.displayRight()
       } else if(this.prevxspeed < 0){
         this.displayLeft()
       }
     }
  }
   
  move(grounds){
    for(this.i = 0; this.i < grounds.length; this.i++){ //collision detection voor bovenkant vd grond
      this.ground = grounds[this.i]
      if(this.ypos + this.height >= this.ground.ypos &&
         this.ypos + this.height < this.ground.ypos + 12.1 &&
         this.xpos + this.width > this.ground.xpos &&
         this.xpos < this.ground.xpos + this.ground.width){
        this.ypos = this.ground.ypos - this.height;
        this.onGround = true;
        if(this.ground.moving){
          this.xpos += this.ground.xspeed;
          this.ypos += this.ground.yspeed;
        }
        break;
      } else{this.onGround = false;}
    }
    if(this.yspeed < 0){
      for(this.j = 0; this.j < grounds.length; this.j++){ //collision detection voor onderkant vd grond
      this.ground = grounds[this.j]
      if(this.ypos <= this.ground.ypos + this.ground.height &&
         this.ypos > this.ground.ypos + 12.1 &&
         this.xpos + this.width > this.ground.xpos &&
         this.xpos < this.ground.xpos + this.ground.width){
        this.underGround = true;
        break;
      } else{this.underGround = false;}
    }
    }
    for(this.k = 0; this.k < grounds.length; this.k++){ //collision detection voor recterkant vd grond
      this.ground = grounds[this.k]
      if(this.xpos <= this.ground.xpos + this.ground.width &&
        this.xpos > this.ground.xpos + this.ground.width - 5.1 &&
        this.ypos + this.height > this.ground.ypos &&
        this.ypos < this.ground.ypos + this.ground.height){
          this.xpos = this.ground.xpos + this.ground.width;
          this.rightNextToGround = true;
          break;
        } else{this.rightNextToGround = false;}
    }
    for(this.l = 0; this.l < grounds.length; this.l++){ //collision detection voor linkerkant vd grond
      this.ground = grounds[this.l]
      if(this.xpos + this.width >= this.ground.xpos &&
         this.xpos + this.width < this.ground.xpos + 5.1 &&
        this.ypos + this.height > this.ground.ypos &&
        this.ypos < this.ground.ypos + this.ground.height){
          this.xpos = this.ground.xpos - this.width;
          this.leftNextToGround = true;
          break;
      } else{this.leftNextToGround = false;}
    }

    if(keyIsDown(RIGHT_ARROW) && this.xpos < width - this.width && !this.leftNextToGround){  
         this.xspeed = 5;
   }
    if(keyIsDown(LEFT_ARROW) && this.xpos > 0 && !this.rightNextToGround){ 
       this.xspeed = -5;
   }
    if(keyIsDown(UP_ARROW) && this.ypos > 0 && this.onGround && this.yspeed == 0){  
         this.yspeed += -10;
   }
    if(keyIsDown(DOWN_ARROW) && !this.onGround && this.yspeed < 0){
      this.yspeed += 10
    }
    
    if(this.xspeed != 0){
       this.prevxspeed = this.xspeed
     } this.display()
    if(this.onGround){ //fixen dat het konijn blijft staan op de grond en niet valt
      if(this.yspeed > 0){
        this.yspeed = 0;
        this.underGround = false;
      }
    }
    if(this.underGround || this.ypos <= 0){ //fixen dat konijn niet door de onderkant van de grond gaat
      this.yspeed = 0;
      this.yspeed += 5;
    }
    
    this.ypos += this.yspeed
    this.xpos += this.xspeed
    
    if(!this.onGround && this.yspeed < 9.6){ //zwaartekracht!
      this.yspeed += 0.4;
    } 
    
    //functies zodat het poppetje soepeler over de grond gaat
    if(!this.rightNextToGround && this.xspeed < -0.4){
      this.xspeed += 0.4
    } else if(!this.leftNextToGround && this.xspeed > 0.4){
      this.xspeed -= 0.4
    } if(this.xspeed < 0.4 && this.xspeed > -0.4 || this.xpos < 0.4 || this.xpos + this.width > height - 0.4){
      this.xspeed = 0
    }
    
   if(this.ypos > height && levens <= 1){ //niet vallen als je niet genoeg levens hebt of je gaat dood
     dead = true;
   
   } else if(this.ypos > height){ //niet vallen maar als je nog genoeg levens heb respawn je
     collectedCoins = prevCollected;
     levens -= 1
     levelsSetup()
     this.xpos = 10
     this.ypos = height - 30 - this.height
   }
  }    
}