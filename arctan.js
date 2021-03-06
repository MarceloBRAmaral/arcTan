//ARCTAN tutorial v. 01
//This tutorial shows how to use arctan math function to make a pointer follow 
//      the mouse pointer
//
//This release adds:
//1. 
//
//BUGS:
//1. 
//
//TO DO:
//1. replace the arrow for a sprite
//
//By Marcelo Silva


//canvas definition
var document;var window;var init;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//get canvas dimensions
var canvasWidth = canvas.width;
var canvasHeigth = canvas.height;

// var definitions
var arrowX=canvasWidth/2;//x and y for arrow beginning
var arrowY=canvasHeigth/2;
var dx,dy=0;//to read the mouse pointer position
var angle=0;//to read the angle for the mouse pointer position

//clears the canvas function
var clearCanvas = function () {
	ctx.clearRect(0,0,canvasWidth,canvasHeigth);
    ctx.beginPath();//only this can remove stroke
};
//read mouse position
document.body.addEventListener('mousemove',function(event){
    dx=event.clientX-arrowX;
    dy=event.clientY-arrowY;
    angle=Math.atan2(dy,dx);
});

//main loop
function main() {
    init = window.requestAnimationFrame(main);
    // Whatever your main loop needs to do.
    clearCanvas();//clear the canvas
    ctx.save();//save the canvas context because it will be translated and rotated
    ctx.translate(arrowX,arrowY);//put the 0 x and y of canvas in the middle of it
    ctx.rotate(angle);//rotate the canvas accordingly to the angle pointing to the mouse pointer
    ctx.moveTo(20,0);//draw an arrow
    ctx.lineTo(-20,0);
    ctx.moveTo(20,0);
    ctx.lineTo(10,-10);
    ctx.moveTo(20,0);
    ctx.lineTo(10,10);
    ctx.stroke();
    ctx.restore();//restore the canvas to its original position an angle    
    }

//main call
main();


