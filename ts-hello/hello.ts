interface Point {
    x : number,
    y : number
}
let draw_point = (point:Point) => {
    console.log("Hello");
}
draw_point({    
    x:1,
    y:2
})