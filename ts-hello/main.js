"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var likeComponent_1 = require("./likeComponent");
var car = new car_1.Car("Mercedes", "SLK");
//car.drive();
var likeComponent = new likeComponent_1.LikeComponent(10, true);
likeComponent.onClick();
console.log("like count : " + likeComponent.likeCount + " , is selected : " + likeComponent.isSelected);
