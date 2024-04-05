
var ar1 = [];

for(i=0; i<10; i++){
    ar1[i] = i+i;
}

console.log(ar1);

ar1.unshift(100);
ar1.unshift(200);
console.log(ar1);

console.log(ar1.shift());
console.log(ar1.shift());
console.log(ar1);


console.log(ar1.splice(0,3));
console.log(ar1);

console.log(ar1.splice(0,1,101,102,103));
console.log(ar1);


console.log(ar1.sort(function(a,b){
    return a-b;
}));
console.log(ar1.sort(function(a,b){
    return b-a;
}));
console.log(ar1.reverse());