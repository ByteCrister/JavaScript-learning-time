
var clickButton = document.querySelector("#btn");
var h1 = document.querySelector("#h-1");
var h2 = document.querySelector("#h-2");


clickButton.addEventListener("click", function(){

    h1.textContent = "Count starts"
    setTimeout(()=>{
        h1.textContent = "";
    }, 2000)

    var number = 1;
    setInterval(()=>{
        h2.textContent = number++;
    },1000)
});


