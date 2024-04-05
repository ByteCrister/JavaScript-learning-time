
const sendDataRequest = (url, configurations) => {

    fetch(url, configurations)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error : ${response}`)
            }
            else
                return response.json();
        })
        .then((response) => { console.log(response); })
        .catch((err) => { console.log(`Error : ${err}`); })
}


// sendDataRequest('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// });




const getData = (url)=>{
    sendDataRequest(url);
}

// getData('https://jsonplaceholder.typicode.com/posts/1');


const updateData = (url, configurations)=>{
    sendDataRequest(url, configurations);
} 


// updateData('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'shakib',
//       body: 'this is a test body',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })


const singleUpdateData = (url, configurations)=>{
    sendDataRequest(url, configurations);
}


// singleUpdateData('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//       title: 'Sadiqul islam shakib',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })


const deleteData = (url, configurations)=>{
    sendDataRequest(url, configurations)
}

deleteData('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})