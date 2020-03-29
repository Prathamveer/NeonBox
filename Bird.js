class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,70,70);
    this.image = loadImage("sprites/purple.png");
    //this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    
  }
}
