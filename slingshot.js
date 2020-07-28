class Slingshot {
constructor(bodyA , pointB){
var options = {
    bodyA : bodyA,
    pointB : pointB,
    stiffness:0.4,
    length : 20
}
this.sling = Constraint.create(options);
this.pointB = pointB;
World.add (world, this.sling);

}
display(){
    push()
strokeWeight(4);
stroke("brown");
line(this.sling.bodyA.position.x , this.sling.bodyA.position.y , this.pointB.x , this.pointB.y);
pop()
}

}