const area = document.querySelector("#text-area");

area.addEventListener('keydown', function(e){

    if(e.repeat){
        alert('Do not repeat');
    }else{
        console.log(e.key);
        console.log(e.code);
    }
});

area.addEventListener('keypress', function(event){

    console.log(event.keyCode);
});

area.addEventListener('keyup', function(){

    console.log("key up");
});