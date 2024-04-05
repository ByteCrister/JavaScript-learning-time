
var numberOfWins = 0;
var numberOfLost = 0;

var inputNumber;
for( i=1; i<=5; i++){
    inputNumber = parseInt(prompt("Enter any number between 1 - 5 : "));
    var random = Math.ceil(Math.random()*4 + 1);
    if(inputNumber == random){
        console.log("\nYou have Won");
        numberOfWins++;
    }else{
        console.log("\nYou have lost . Random number was : "+random);
        numberOfLost++;
    }
}

document.write("<h1> You have won : "+numberOfWins+" times </h1></br>")
document.write("<h1> You have lost : "+numberOfLost+" times </h1></br>")