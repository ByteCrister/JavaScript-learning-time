
var link = document.getElementsByTagName("a")[0];

link.style.textDecoration = "none";
link.style.color = "red";
link.style.fontSize = "30px";
link.style.fontWeight = "700";

link.href = "https://google.com";




// get, create, add elements
var element1 = document.createElement("h1");
var text1 = document.createTextNode("This is heading 1");
element1.appendChild(text1);

var element2 = document.createElement("h1");
var text2 = document.createTextNode("This is heading 2");
element2.appendChild(text2);

var element3 = document.createElement("h1");
var text3 = document.createTextNode("This is heading 3");
element3.appendChild(text3);

var element4 = document.createElement("h1");
var text4 = document.createTextNode("This is heading 4");
element4.appendChild(text4);

var mainDiv = document.querySelector(".main-div");
mainDiv.appendChild(element1);
mainDiv.appendChild(element2);
mainDiv.appendChild(element3);
mainDiv.appendChild(element4);

mainDiv.style.color = "Blue";


// removing elements
var removeElement3 = document.getElementsByTagName("h1")[2]; //getting an element
mainDiv.removeChild(removeElement3);


//adding elements in Q order
var element5 = document.createElement("h1");
var text5 = document.createTextNode("This is heading 5");
element5.appendChild(text5);

var head1 = document.getElementsByTagName("h1")[0];

mainDiv.insertBefore(element5,head1);