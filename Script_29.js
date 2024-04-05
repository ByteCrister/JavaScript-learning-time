
var currImage = 1;
var imgSrc = document.getElementById("img-src");
imgSrc.src = "img-1.jpg";

function previous() {
    currImage--;
    if (currImage == 0) {
        currImage = 3;
    }
    imgSrc.src = "img-"+currImage+".jpg";
}
function next() {
    currImage++;
    if (currImage == 4) {
        currImage = 1;
    }
    imgSrc.src = "img-"+currImage+".jpg";
}