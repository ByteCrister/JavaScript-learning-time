
var num1 = parseInt(prompt("Enter 1st number : "));
var num2 = parseInt(prompt("Enter 2nd number : "));

function exponent(num1, num2){
    return num1**num2;
}

document.write(num1+" ** "+num2+" = "+exponent(num1, num2)+"<br>");