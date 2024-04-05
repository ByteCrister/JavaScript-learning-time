"use strict";

// Use of default and rest parameter

function defaultExample(inputText = "This is default text") {
    console.log(`${inputText}`);
}

defaultExample();
defaultExample("Hi, Im Shakib");


function restParameterExample(a = 30,b = 20 ,c = 10,...d){

    console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
}

restParameterExample(10,20,30,40,50,60);
