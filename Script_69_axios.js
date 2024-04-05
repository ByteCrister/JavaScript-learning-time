

const sendDataRequest = (url, configuration) => {
    axios.post(url, configuration)
        .then((Response) => { console.log(Response.data); })
        .catch((err) => { console.log(err); })
}


const getDataRequest = (url) => {
    axios.get(url)
        .then((Response) => { console.log(Response.data); })
        .catch((err) => { console.log(err); })
}

const updateData = (url, configuration) => {
    axios.put(url, configuration)
        .then((Response) => { console.log(Response.data); })
        .catch((err) => { console.log(err); })
}


const singleUpdateData = (url, configuration) => {
    axios.patch(url, configuration)
        .then((Response) => { console.log(Response.data); })
        .catch((err) => { console.log(err); })
}


const deleteData = (url) => {
    axios.delete(url)
        .then((response) => { console.log(response.data); })
        .catch((err) => { console.log(err); })
}

// deleteData('https://jsonplaceholder.typicode.com/posts/1');


/* ***************************  */
const makeRequest = async (configuration) => {
    return await axios(configuration);
}

const getResource = (configuration) => {

    makeRequest(configuration)
        .then((response) => { console.log(response.data); })
        .catch((err) => { console.log(err); })
}

// getResource('https://jsonplaceholder.typicode.com/posts/1')



const sendResource = (configuration) => {

    makeRequest(configuration)
        .then((response) => { console.log(response.data); })
        .catch((err) => { console.log(err); })
}
// sendResource({
//     url : 'https://jsonplaceholder.typicode.com/posts',
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       }),

// });

const deleteResource = (configuration) => {

    makeRequest(configuration)
        .then((response) => { console.log(response.data); })
        .catch((err) => { console.log(err); })
}
sendResource({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    method: 'DELETE',

});
/*********************************/








// singleUpdateData('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'this is a test title',
//     }),
// });

// updateData('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'test title',
//       body: 'bar',
//       userId: 1,
//     }),
//   })


// getDataRequest('https://jsonplaceholder.typicode.com/posts/1');


// sendDataRequest('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//   })