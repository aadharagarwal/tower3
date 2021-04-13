class poligon{

    constructor(x,y,w,h){
     var opction = {
         isStatic:true

     }
      
     this.Abody = Bodies.rectangle(x,y,w,h,opction);
     World.add(world,this.Abody)
     this.w = w
     this.h = h
    }
    
  ascreen(){

rectMode(CENTER)
rect(this.Abody.position.x,this.Abody.position.y,this.w,this.h)

  }
    
    }
