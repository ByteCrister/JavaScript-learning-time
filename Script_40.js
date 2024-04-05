
var div = document.querySelector("div");

div.addEventListener('click', function(){

    console.log("Clicked");
});

div.addEventListener('dblclick', function(){

    console.log("Double clicked");
});

div.addEventListener('mousedown', function(){

    console.log("Mouse down");
});

div.addEventListener('mouseup', function(){

    console.log("Mouse up");
});

div.addEventListener('mouseenter', function(){

    console.log("Mouse enter");
});

div.addEventListener('mouseleave', function(){

    console.log("Mouse leave");
});

div.addEventListener('mousemove', function(e){

    // console.log("Mouse move");

    //This x - y direction will measure from the hole window
    // console.log("xValue : "+e.clientX+" , yValue : "+e.clientY); 

    //This x - y direction will measure from the selected div
    // console.log("X : "+e.offsetX+" , Y : "+e.offsetY);
});

div.addEventListener('mouseover', function(){

    console.log("Mouse over");
});




var div2 = document.querySelector(".div2");
div2.addEventListener('click', function(event){

    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.innerHTML);
    console.log(event.target.innerText);
});


var buttons = document.querySelectorAll(".button-class");
// console.log(buttons);

Array.from(buttons).map((inMap)=>{
    inMap.addEventListener('click', function(){

        console.log(this.innerText+" is clicked");
    });
});