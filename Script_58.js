

/* Array destructure */
let array1 = [1, 2, 3, 4, 5, 6, 7];
let [num1, num2, ...numbers] = array1;
console.log(`${num1}_${num2}_${numbers}`);


/* Variable destructure */
let a = 10, b = 20;
[a, b] = [b, a];
console.log(` a : ${a}, b : ${b}`);


/* object destructure */
let Object1 = {
    name: "Shakib",
    age: 22,
    id: 43,

    /* nested object destructure */
    object2 : {
        country : 'bangladesh',
        city : 'Sylhet'
    }
}

let {name, age, id, object2} = Object1
console.log(`${name}, ${age}, ${id}, ${object2.city}`);



/* destructuring function parameter */
let function1 = ({name,age})=>{
    console.log(`name : ${name}, age : ${age}`);
}

function1(Object1);