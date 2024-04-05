

//Arrow function

let arrayOfObject = [
    {
        name: "Shakib",
        age: 22,
        id: 43
    },
    {
        name: "Hasan",
        age: 21,
        id: 40
    },
    {
        name: "Rakib",
        age: 22,
        id: 3
    }
]

console.log(arrayOfObject);

// let nameArray = arrayOfObject.filter((inMainValue) => {
//     return inMainValue.id >= 40;
// })

// nameArray.map((inMap)=>{
//     console.log(inMap.name);
// })



//In different approach
let showNames = () => {
    //At first filtering the objects according to the id then returning the name using map
    return arrayOfObject.filter((filterValue) => filterValue.id >= 40).map((inMap) => inMap.name); 
}

console.log(showNames());