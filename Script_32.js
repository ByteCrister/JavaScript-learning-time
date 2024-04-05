var buttonLength = document.getElementsByTagName("button").length;
var heading =  document.querySelector("h1");
var text = '';

for( i=0; i<buttonLength; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        text = this.innerHTML;
        heading.innerHTML = text + " is clicked !";
    });
}