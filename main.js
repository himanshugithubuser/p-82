var canvas= document.getElementById("Mycanvas");
var ctx= canvas.getContext("2d");
color= "blue";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y= e.clientY-canvas.offsetTop;
    console.log("X="+ mouse_x+ ",Y="+ mouse_y);
    circle(mouse_x, mouse_y);
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseup"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        console.log("current pos of x and y- ");
        console.log("x- " + current_position_of_mouse_x + "y- " + current_position_of_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle= black;
        ctx.lineWidth= 5;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 40, 0, 2*Math.PI);
        ctx.stroke();
    }
}

