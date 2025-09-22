// promisification

// without promise
function loadScript(src,callback){
    const script =document.createElement('script');
    script.src=src;
    script.onload =() => callback(null,script);
    script.onerror=(error)=>callback(error);
    document.head.appendChild(script);
}
loadScript("test.js",(err,script) =>{ // make the file name as test.js
    if(err){// then execute the code
        console.log(err);
    } else{
        console.log("script Loaded");
    }
});

