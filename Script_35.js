

var textCount = 0;
var textArea = document.querySelector("#t-1");
var area = document.querySelector("h3");

textArea.addEventListener("keypress",function(){
    
    area.innerHTML = "Number of text "+ (++textCount);

});