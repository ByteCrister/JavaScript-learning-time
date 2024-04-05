

(function(){
    var inputText = prompt("Enter your name : ");
    var head = document.createElement("h1");
    var showText;

    if(inputText == null || inputText== ''){
        showText = "No name found !!";
    }else{
        showText = "Welcome " + inputText;
    }

    head.appendChild(document.createTextNode(showText));
    document.body.appendChild(head);
})();


