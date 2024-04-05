

// Array methods -find() and -findIndex()
let array1 = []

for (let i = 0; i < 100; i++) {
    array1.push(i);
}
console.log(array1);

console.log(array1.find((IterationValue) => IterationValue == 99));
console.log(`Index : ${array1.findIndex((IterationValue) => IterationValue == 99)}`);




let array2 = ['Shakib', 'Anik', 'Rhidoy', 'Arnab']
console.log(array2);
console.log(`Index of "Rhidoy : ${array2.findIndex((IterationValue) => IterationValue == 'Rhidoy')}`);



// 2D array
let array2D = []
for (let i = 0; i < 5; i++) {
    array2D[i] = []
    
    for (let j = 0; j < 5; j++) {
        array2D[i][j] = i+j;
    }
}

console.log(array2D);


let objectArray = [
    {
        name : 'shakib',
        id :10
    },
    {
        name : 'anik',
        id :20
    },
    {
        name : 'arnab',
        id :30
    },
    {
        name : 'rahul',
        id :40
    },
]


let names = objectArray.find((IterationValue)=> IterationValue.id>=30 );

console.log(names.name);