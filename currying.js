function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
};// this is currying function

console.log(add(2)(3)(10));


// suppose uhave to send auto eamil

function sendAutoEmail(to){
    return function (subject){
        return function (body){
           console.log(`sending Email to ${to} with subject`) 
        };
    };
};
let step1= sendAutoEmail("ruchikumari343@gmail.com");
let step2= step1("New Order Confirmation");
step2("hey Ruchi, here is something for you");




