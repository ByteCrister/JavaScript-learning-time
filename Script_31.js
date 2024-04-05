
var heading = document.querySelector("h2");
var button = document.querySelector("button");
var toggle = false;

heading.addEventListener("mouseover",function(){
    heading.classList.add("h2");
});
heading.addEventListener("mouseout",function(){
    heading.classList.remove("h2");
});


button.addEventListener("click",function(){
    if(toggle){
        button.classList.remove("b1");
        toggle = false;
    }else{
        button.classList.add("b1");
        toggle = true;
    }
});
