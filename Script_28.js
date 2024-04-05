// Downward traversing
var list1 = document.getElementById("list1");
var item1 = list1.querySelector(".item-1");
var item2 = list1.querySelector(".item-2");
var item3 = list1.querySelector(".item-3");

// Or

var list1 = document.getElementById("list1");
var item1 = list1.getElementsByTagName("li")[0];
var item2 = list1.getElementsByTagName("li")[1];
var item3 = list1.getElementsByTagName("li")[2];


// Or

var item1= document.querySelector("li");

var list1 = list1.parentElement;

var item2 = list1.children[1];
var item3 = list1.children[2];


// upward traversing
var item1= document.querySelector("li");//select a child
var list1 = list1.parentElement;//then find the parent


//side way traversing
var item1 = document.querySelector(".i-4");//selecting the first child
var item2 = item1.nextElementSibling; //storing 2nd element after 1st
var item3 = item2.previousElementSibling;//storing 1st element before 2nd
