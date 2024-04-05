
let promise1 = () => {
    return new Promise((resolve, reject) => {
        resolve("This is promise 1")
    })
}
let promise2 = () => {
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve("This is promise 2")
       }, 2000)
    })
}
let promise3 = () => {
    return new Promise((resolve, reject) => {
        resolve("This is promise 3")
    })
}
let promise4 = () => {
    return new Promise((resolve, reject) => {
        resolve("This is promise 4")
    })
}

//if promise1 is resolved then calls promise2 function, if promise2 is resolved then calls promise3 function
promise1()
    .then((returnResolve) => { console.log(returnResolve); })
    .then(promise2)
    .then((returnResolve) => { console.log(returnResolve); })
    .then(promise3)
    .then((returnResolve) => { console.log(returnResolve); })
    .then(promise4)
    .then((returnResolve) => { console.log(returnResolve); })
    .catch((error)=>{ console.log(error); })
