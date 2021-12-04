import { Shape } from "./Shape";
import { Cirle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle=new Cirle(5,10,20);
let myRectangle=new Rectangle(0,0,3,7);

let theShapes:Shape[]=[];


theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}

