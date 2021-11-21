class ground{

constructor(x,y,w,h){

var options={
    isStatic:true
}
this.w
this.h
this.x
this.y
this.body=Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body)

}

display(){

var groundPos=this.body.position;
push();
translate(groundPos.x, groundPos.y);
rectMode(CENTER);
fill("black");
rect(800,400,1600,this.h);
pop();

}



}