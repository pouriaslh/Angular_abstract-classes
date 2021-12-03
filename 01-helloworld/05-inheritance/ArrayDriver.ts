import { Shape } from "./Shape";
import { Cirle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape=new Shape(10,15);
let myCircle=new Cirle(5,10,20);
let myRectangle=new Rectangle(0,0,3,7);

let theShapes:Shape[]=[];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}

