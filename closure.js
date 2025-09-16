// function main(){
//     const name ="Ruchi";

//     function sayMyName(){ // this inner function
//         console.log(name);
//     }
//     sayMyName(); // ek function ke andar function hai jo kisi var ko declare kar rha hai outer function me
// }
// main();

const myName = document.getElementById("my-name");
const btn = document.getElementById("my-btn");



function makeTextSizer(size){
    function changeSize(){
        myName.style.fontSize=`${size}px`;

    }
    return changeSize;
}  

const size12 =makeTextSizer(12);
const size20 =makeTextSizer(20);
const size52=makeTextSizer(52);
const size5=makeTextSizer(5);
btn.addEventListener('click', size20)//here i will call the size and it will change


