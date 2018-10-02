import { Car } from "./car";
import { LikeComponent } from "./likeComponent";

let car = new Car("Mercedes", "SLK");
//car.drive();

let likeComponent = new LikeComponent(10, true);
likeComponent.onClick();

console.log(`like count : ${likeComponent.likeCount} , is selected : ${likeComponent.isSelected}`);
 