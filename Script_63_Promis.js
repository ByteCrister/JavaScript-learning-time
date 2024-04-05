let state = true;


//creating promise - 
let promise1 = new Promise((resolve, reject) => {
    if (state) {
        resolve("This promise 1 is resolved");
        state = false;
    } else {
        state = true;
        reject("This promise 1 is rejected");
    }
});

promise1.then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
});




let promise2 = new Promise((resolve, reject) => {
    if (state) {
        resolve("This promise 2 is resolved");
        state = false;
    } else {
        state = true;
        reject("This promise 2 is rejected");
    }
});

promise2.then((res) => {
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


//promise destructure
Promise.all([promise1, promise2]).then(([response1, response2])=>{
    console.log(response1);

}).catch((error)=>{
    console.log(error);
})



//  use of race - in this method which promise is resolved or reject first, will go in the response
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("This is promise 3")
    }, 3000)
})
let promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("This is promise 4")
    }, 2000)
})

Promise.race([promise3, promise4]).then((res)=>{
    console.log(res);
})