var inCanvas = document.querySelector("#canvas");

var designCanvas = inCanvas.getContext("2d");

// start rectangular
designCanvas.lineWidth = 2;
designCanvas.strokeStyle = "black";
designCanvas.strokeRect(15, 15, 400, 200);

designCanvas.fillStyle = "green";
designCanvas.fillRect(15, 15, 398, 198);


// rectangular end


// circle start
var valueX = inCanvas.width / 2;
var valueY = inCanvas.height / 2;

designCanvas.beginPath();
designCanvas.arc(valueX,valueY,50,0,2*Math.PI,false);
designCanvas.fillStyle = "red";
designCanvas.fill();
designCanvas.stroke();
// circle end

