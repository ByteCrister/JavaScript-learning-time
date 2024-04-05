var var1 = prompt("Enter 1st value : ");
var var2 = prompt("Enter 2nd value : ");
var1 = parseInt(var1,10);
var2 = parseInt(var2,10);

document.write(var1 + " + " + var2 + " = " + (var1 + var2) + "</br>");
document.write(var1 + " - " + var2 + " = " + (var1 - var2) + "</br>");
document.write(var1 + " / " + var2 + " = " + var1 / var2 + "</br>");
document.write(var1 + " % " + var2 + " = " + (var1 % var2) + "</br>");
document.write(var1 + " * " + var2 + " = " + var1 * var2 + "</br>");
document.write(var1 + " ** " + var2 + " = " + var1 ** var2 + "</br>");

document.write("--var1 : " + (--var1) + "</br>");
document.write("var1-- : " + (var1--) + "</br>");
document.write("++var1 : " + (++var1) + "</br>");
document.write("var1++ : " + (var1++) + "</br>");
