

var textHeading = document.createElement("h3");
textHeading.appendChild(document.createTextNode("Enter a number between 1-5 :"));
document.body.appendChild(textHeading);

var inputTag = document.createElement("input");
document.body.appendChild(inputTag);

var showButton = document.createElement("button");
showButton.appendChild(document.createTextNode("Show"));
document.body.appendChild(showButton);

var showText = 0;
showButton.addEventListener("click", function(){

    
    try{
        showText = inputTag.value;
        showText  = parseInt(showText);
        if(showText<1 || showText>5 || showText==null){
            throw 'Your number is out of range '
        }else{
            console.log("You have entered : "+showText);
        }

    }catch(e){
        console.log(e);

    }finally{

        console.log(showText);
        console.log(typeof(showText));
    }

});