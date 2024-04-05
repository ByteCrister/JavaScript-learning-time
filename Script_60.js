

// String methods

// console.log("This is a string".startsWith('This'));
// console.log("This is a string".startsWith('this'));
// console.log("This is a string".startsWith('is',5));

// console.log("This is a car".endsWith('car'));
// console.log("This is a car".endsWith('car',13));

// console.log("This is for concludes".includes("conclude"));


let transactionText = 'You have received Tk 330.00 from 01728655212.Ref Monthly Subscription- December,2023 Hasan Tareq. Fee Tk 0.00. Balance Tk 155,855.60. TrxID AKS7VY3GYJ at 28/11/2023 15:49';


let amount = ''
let numberOf = ''
let TrxID = ''
let date = ''
let time = ''

if (transactionText.startsWith('You have received Tk')) {

    let index1 = transactionText.indexOf('from')+17;
    let index2 = transactionText.length;
    let secondString = transactionText.slice(index1, index2)
    // console.log(secondString);

    let indexFrom = transactionText.indexOf('from');
    // console.log(indexFrom);

    amount = transactionText.slice(21, indexFrom).trim();

    index1 = transactionText.indexOf('from')+4;

    numberOf = transactionText.slice(index1 , index1+12).trim()

    index1 = secondString.indexOf('TrxID') + 6
    index2 = secondString.indexOf('at') - 1
    TrxID = secondString.slice(index1, index2).trim()

    index1 = secondString.indexOf('at') + 2
    index2 = secondString.length - 5
    date = secondString.slice(index1, index2).trim();

    index1 = secondString.indexOf(date) + date.length
    index2 = secondString.length
    time = secondString.slice(index1, index2)
    console.log(`Amount : ${amount}, Number : ${numberOf}, TrxID : ${TrxID}, Date : ${date}, Time : ${time}`);
}
