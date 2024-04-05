
// Spread operator

function sumOfNumbers(a, b, c, ...d) {
    console.log(`Sum = ${a + b + c}, Extra : ${d}`);
}

let array1 = [1, 2, 3, 4, 5, 6]

sumOfNumbers(...array1);

let array2 = [7, 8, 9]

let array3 = [...array1, ...array2]  //array concatenation using spread operator
console.log(array3);


let object1 = {
    name : "Shakib",
    age : 22
}

let object2 = {
    hobby : 'coding',
    device : 'laptop'
}

let object3 = {...object1, ...object2}  //object concatenation using spread operator

console.log(object3);