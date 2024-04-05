// function expression
var function1 = function (message){
    console.log(message +" from function 1");
}
function1("Message 1");

var function2 = function newMessage(message){
    console.log(message+" from function 2");
}
function2("Message 2");


// immediate function calling
(function newMessage(message){
    console.log(message+" by immediate function calling");
})('Message 3');