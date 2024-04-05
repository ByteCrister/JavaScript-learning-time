

let promise1 = ()=>{
    return new Promise((resolved, reject)=>{
        resolved("Promise 1 resolved")
    })
}
let promise2 = ()=>{
    return new Promise((resolved, reject)=>{
       setTimeout(()=>{
        resolved("Promise 2 resolved")
       }, 2000)
    })
}
let promise3 = ()=>{
    return new Promise((resolved, reject)=>{
        resolved("Promise 3 resolved")
    })
}
let promise4 = ()=>{
    return new Promise((resolved, reject)=>{
        resolved("Promise 4 resolved")
    })
}


const AllPromise = async ()=>{
    const p1 = await promise1();
    console.log(p1);
    const p2 = await promise2();
    console.log(p2);
    const p3 = await promise3();
    console.log(p3);
    const p4 = await promise4();
    console.log(p4);
   
}

AllPromise()