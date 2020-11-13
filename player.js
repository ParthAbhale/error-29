class Player{
    constructor(x,y,width,height){
       this.x = x
       this.y = y
       this.r
       this.body = Bodies.circle(x,y,this.r,{isStatic:true})
       World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      ellipseMode(RADIUS)
      ellipse(0,0,20,20) 
    }
}