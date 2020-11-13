class Ground{
    constructor(x,y,width,height){
       this.x = x
       this.y = y
       this.width = widht
       this.height = height
       this.body = Bodies.circle(x,y,width,height,{isStatic:true})
       World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      rectMode(CENTER)
      rect(pos.x,pos.y,200,15) 
    }
}