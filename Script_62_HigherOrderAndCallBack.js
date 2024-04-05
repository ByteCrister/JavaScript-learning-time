
function sayIt(value){
    console.log('This is a function '+(value*value));
}
sayIt(2);

let onIt = sayIt
onIt(4)


// HigherOrder and CallBack
function higherOrder(value , callback){
    callback(value)
}

higherOrder(8 , onIt)

console.log('\n\n');

////////////////////////////////////


function taskOne(callback){
    console.log("This is from task 1");
    callback()
}
function taskTwo(callback){
    setTimeout(()=>{
        console.log("This is from task 2");
        callback()
    }, 2000)
}
function taskThree(callback){
    console.log("This is from task 3");
    callback()
}
function taskFour(){
    console.log("This is from task 4");
}

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour()
        })
    })
})