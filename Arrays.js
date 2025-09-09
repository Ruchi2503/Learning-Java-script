// Arrays
const students=["Ruchi", "Deo","john", "Jane"];// Basically we have strings int his array
 console.log(students);
 console.log(students.length)// length of array

//  How to acess the array
console.log(students[3]);

//  if we want to update the values of array

students[0]="Ruchi kumari";
console.log(students);

students.push("Alexa"); //this push keyword throw the value at end and u can use as many as value u want
students.push("Siri");
console.log(students); 

// in any other language array is a homogenous but in js its hetorgenous

const myArray=[1,true,"Ruchi",]
myArray.push("ruchi");

myArray.push=({name:"google"});// we can create here objects also
console.log(myArray);

console.log(myArray.indexOf("ruchi"));//  how to find the index value
// myArray.push() ---> it will add new value
myArray.pop()//       it will delete from end
myArray.reverse();//  it will reverse the whole array