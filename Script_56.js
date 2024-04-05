

// for...each - map - filter

let array1 = [10, 20, 30, 40, 50];
let array2 = [];

console.log(array1);
// By forEach
array1.forEach(function (iterationValue) {

    array2.push(Math.pow(iterationValue, 2));
});
console.log(array2);



// By map
let array3 = array1.map((arrayMapValue) => {

    return (Math.pow(arrayMapValue, 2)); //In map function it returns an array
});

console.log(array3);



// By filter
let newArray = [1, 10, 2, 11, 3, 12, 4, 13];
let array4 = newArray.filter(function (iterationValue) { //we'r filtering the newArray 
    return iterationValue < 10;  //In filter we can add any condition on its return basis
});
console.log(array4);
