var len = document.querySelectorAll("button").length;
console.log(len);

for(var i=0; i<len; i++){

    document.querySelectorAll(".button")[i].addEventListener("click",function(){
        var selectedButton = this.innerHTML.trim();

        addClassTo(selectedButton);
    }); 
}

function addClassTo(selectedButton){
    
    document.querySelector("."+selectedButton).classList.add("animation-"+selectedButton);    
    setTimeout(function(){
        document.querySelector("."+selectedButton).classList.remove("animation-"+selectedButton);      
    }, 2000);
}