// Iterators and generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behaviour of for..of loops.

// Iterators
for(const val of[1, 2,3 ,4 ,5]){// array ke andar ek built in function hai jo use btata hai ki jab aaray aayega to use kaise print karna hai
    console.log(val);
}



function* makeMyIteratorNew(start, end){// here we have make the generator function
    for(let i= start; i<=end; i++){// or hamne use har baar yield kar diya

        yield i;
    }
}
const one =makeMyIteratorNew(1, 20);
for(const val of one){
    console.log(val);
}


// ...........
