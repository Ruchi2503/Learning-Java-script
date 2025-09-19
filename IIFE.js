// IIFE --> Immediately Invoked Function Expression

(function add(a,b){// take the function in parenthesis()
    console.log(a+b);
})(2,3); //here we have invoked the function immediately


(function say(){
    console.log("hey");
    
})();
//  we can convert it into Es6 function also

// first we are having function then arrow function console.log the call the function
(() => console.log("I am Es6"))();


// ................
const value=(() =>100)();
console.log(value);



const atm =function(initaBalance){
    let balance =initaBalance;
    function withdraw(amt){
        if(amt >balance){
            return "Are u kidding";
        }
        else{
            balance -=amt;
            return balance;
        }
    }
    return { withdraw};
};
const ruchi =atm(1000);// here we have created account name as ruchi
console.log(ruchi.withdraw(100));
console.log(ruchi.withdraw(100));
console.log(ruchi.withdraw(1000));
