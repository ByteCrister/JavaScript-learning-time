
var input = document.querySelector("input");

input.addEventListener('blur', function(){

    console.log("Blur is occurred");
});
input.addEventListener('focusin', function(){

    console.log("focusin is occurred");
    input.style.backgroundColor = "tomato";
    input.style.padding = "10px";
    input.style.fontSize = "30px";
    
});
input.addEventListener('focusout', function(event){
    
    console.log("focusout is occurred");
    input.style.backgroundColor = "transparent";
    input.style.padding = "0px";
    input.style.fontSize = "15px";

    input.value = event.target.value.toUpperCase();
});
input.addEventListener('focus', function(){

    console.log("focus is occurred");
});