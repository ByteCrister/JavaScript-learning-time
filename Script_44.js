var p = document.querySelector('p');
var div = document.querySelector('div');

p.addEventListener('dragstart', function(e){

    e.dataTransfer.setData("Text",e.target.id);
    console.log("Drag start");
});

div.addEventListener('dragover', function(e){

    //for cancelling the auto refresh
    e.preventDefault();
    console.log("Drag over");
});

div.addEventListener('drop', function(e){

    var id = e.dataTransfer.getData("Text");
    div.appendChild(document.getElementById(id));
    console.log("Drop");
});