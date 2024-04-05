
// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
//function - open(), send(), setRequestHeader()


console.clear();



// Define a function named 'sendDataRequest' that takes three parameters: method, url, and DATA
const sendDataRequest = (method, url, DATA) => {

    return new Promise((resolve, reject)=>{

        // Create a new instance of XMLHttpRequest
    const xht = new XMLHttpRequest();

    // Open a connection with the specified method, URL, and whether the request is asynchronous (true by default)
    xht.open(method, url);


    // Set the request header to indicate that the data being sent is in JSON format
    xht.setRequestHeader('Content-type', 'application/json') 

    // Define an event handler for the 'load' event, which is triggered when the request completes successfully
    xht.onload = () => {
        // Retrieve the response data from the XMLHttpRequest object
        let data = xht.response;
        // Parse the response data from JSON format and log it to the console
        console.log(JSON.parse(data));
    }

    // Define an event handler for the 'error' event, which is triggered when there is an error in the request
    xht.onerror = () => {
        // Log an error message to the console
        console.log('Error handled');
    }

    // Convert the provided data (DATA) to JSON format and send it in the request body
    xht.send(JSON.stringify(DATA));

    })
}

// Call the 'sendDataRequest' function with a 'POST' method, a specific URL, and a data object
sendDataRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
}).then((res)=>{})



const getDataRequest = (method, url) => {

    sendDataRequest(method, url).then((res)=>{});
}

getDataRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1');





const updateDataRequest = (method, url, Data) => {
    sendDataRequest(method, url, Data).then((res)=>{});
}

updateDataRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
    title: 'shakib',
    body: 'html',
    userId: 1,
})



const updateSingleDataRequest = (method, url, Data) => {
    sendDataRequest(method, url, Data).then((res)=>{});
}


updateSingleDataRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
    title: 'changed title',
})


const deleteDataRequest = (method, url)=>{
    sendDataRequest(method, url).then((res)=>{});
}

deleteDataRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')