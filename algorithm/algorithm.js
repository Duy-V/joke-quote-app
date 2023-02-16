// //  Mini-Max Sum
let arr = [1, 3, 5, 7, 9];

arr.sort();
let largest = arr.slice(1).reduce((a, b) => a + b, 0);
arr.reverse();
let smallest = arr.slice(1).reduce((a, b) => a + b, 0);

console.log(largest+ " " + smallest);


// Function Description
var array =[1,2,3,4,5]
function miniMaxSum (params) {
    params.sort()
    let minimum = 0;
    let maximum = 0;
    for (let i=1; i< params.length; i++){
        maximum += params[i]
    }
    for (let i=0; i< params.length -1; i++){
        minimum += params[i]
    }

   console.log(maximum+ " " + minimum)
}
miniMaxSum(array)