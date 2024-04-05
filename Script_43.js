
var text = document.querySelector('h1');

text.addEventListener('copy', function(){

    console.log("Copy");
});
text.addEventListener('cut', function(){

    console.log("Cut");
});
text.addEventListener('paste', function(){

    console.log("Paste");
});