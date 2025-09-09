// High order Function and call back
//  a function that takes a function as an argument is called a high order function
function add(a,b,cb){ // cb stands for call back
    let result=a+b;
    cb(result);
    return ()=> console,log(result);

}
let resultFunction =add(2,4,()=> {});
resultFunction();

// ..........................another way
// function showresult(result){
//     console.log(result);
// }
// add(2,4,showresult);




