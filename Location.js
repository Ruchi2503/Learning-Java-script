const button=document.getElementById("get-location");

 
 async function getData(lat,long){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=ab913709f1a04e1d8d193027251109&q=${lat},${long}&aqi=yes`);
    return await promise.json()

}




 async function gotlocation(position){
    const result =await getData(
        position.coords.latitude,
        position.coords.longitude
    );
    console.log(result);
    

}
function failedToGet(){
    console.log("There was some issue");
}

button.addEventListener("click",async () =>{
   navigator.geolocation.getCurrentPosition (() =>{},() =>{})
    

});