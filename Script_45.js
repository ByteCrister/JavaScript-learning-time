
var divLocation = document.querySelector(".location");

console.log(location);

divLocation.children[0].textContent = location.href;
divLocation.children[1].textContent = location.protocol;
divLocation.children[2].textContent = location.hostname;
divLocation.children[3].textContent = location.port;
divLocation.children[4].textContent = location.host;
divLocation.children[5].textContent = location.pathname;



var button = document.querySelector("#btn");

button.addEventListener("click", function(){

    location.assign("https://www.google.com");
});