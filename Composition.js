function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;

}
function square(c){
    return c*c;
}
function composeTwoFunction(fn1,fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    };
}
const task =composeTwoFunction(multiply,square);// it composing two function
console.log(task(2,3));
