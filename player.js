class Player {
    //function that gets executed automatically when object of a class is created, define properties
    constructor(){
        this.body = createSprite(400, 450, 50, 50);
        this.body.shapeColor = "green";
        angleMode(DEGREES);
        this.body.rotation = 180;
    }


    navigate(){
      this.body.rotation = this.body.rotation + 2;
        var invisible = createSprite(200,200,10,10);
        invisible.x = mouseX;
        invisible.y = mouseY;
       console.log( invisible.getDirection());
    }

} 