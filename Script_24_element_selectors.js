
var head1 = document.getElementById("h-1");
head1.innerHTML = "This is heading 1 selected by javaScript";

var head2 = document.getElementById("h-2");
head2.innerHTML = "Bye Bye !!!";

var para1 = document.getElementById("p-1");
para1.innerHTML = "This is paragraph tag selected by id in javaScript";

document.getElementsByTagName("h1")[2].innerHTML = "This a heading 1 selected by tag name";

document.getElementsByClassName("h-3")[0].innerHTML = "This is a heading selected by a class";