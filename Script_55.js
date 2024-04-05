let array1 = Array();

for (let i = 0; i < 10; i++) {
    array1.unshift(i * i);
}

// for..of
for (let i of array1) {
    console.log(`i : ${i}`);
}

let object1 = {
    name: "Shakib",
    age: 22,
    home: "Sylhet",
};

//for..in is used for objects
for (let i in object1) {
    console.log(`${i} : ${object1[i]}`);
}

//for... each
array1.forEach(function (i) {
    console.log(`${i}`);
});

console.log(
    array1.sort(function (a, b) {
        return a - b;
    })
);

let Array1 = [1, 2, 3, 4, 5];
console.log(Array1);

Array1.forEach(function (iterationValue, indexOfArray, mainArray) {

    mainArray[indexOfArray] = Math.pow(iterationValue, 2);
});
console.log(Array1);

Array1.forEach(function (iterationValue, indexOfArray, mainArray) {

    mainArray[indexOfArray] = iterationValue + 10;
});
console.log(Array1);

