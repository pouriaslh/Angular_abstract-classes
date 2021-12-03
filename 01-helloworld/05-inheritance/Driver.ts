import { Shape } from "./Shape";
import { Cirle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape=new Shape(10,15);
console.log(myShape.getInfo());

let myCircle=new Cirle(5,10,20);
console.log(myCircle.getInfo());

let myRectangle=new Rectangle(0,0,3,7);
console.log(myRectangle.getInfo());