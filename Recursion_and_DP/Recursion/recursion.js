//used on JSON.parse and JSON.stringify
//document.getElementById and DOM traversal
//object traversal
//

function countDown(num){
    //Base case
    if(num <= 0) {
        console.log('All done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);

    //Different input
}

countDown(10);


sumRange = (num)=> {
    if(num === 1) return 1;
    return num + sumRange(num-1);

}

factorial = (num) => {
    if(num === 1) return 1;
    return num * factorial(num-1);
}

function power(base, e){
    if (e === 0) return 1;
    return base*(power(base,e-1));
}

function recursiveRange(num){
    if (num === 0) return 0;
    
    return num+recursiveRange(num-1);
   
}

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0]*productOfArray(arr.slice(1))
}
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
