
var body = document.querySelector("body");

body.style.height = "200vh";

window.addEventListener("load", function(){

    console.log("Page load");
});

window.addEventListener("unload", function(){

    console.log("Page unload");
});

window.addEventListener("scroll", function(){

    console.log("Page scrolling");
});

window.addEventListener("resize", function(){

    const height = window.outerHeight;
    const width = window.outerWidth;

    console.log(`Height : ${height}, Width : ${width}`);
});


var detail = document.querySelector("details");

detail.addEventListener("toggle", function(event){

    if(event.target.open){
        console.log("Open bio");
    }else{
        console.log("Close bio");
    }
});