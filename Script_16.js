
var ar1 = [];
for( i=0; i<5; i++){
    ar1[i] = parseInt(prompt("Enter number "+(i+1)+" : "));
}

var sum=0;
for(i=0; i<ar1.length; i++){
    sum+=ar1[i];
}

document.write("<h1>Sum of numbers : "+sum+"</h1>");