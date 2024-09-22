const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "cd96c1afb434487d17f0abebc6974ce0";
const searchbtn = document.querySelector(".search button");
const searchinput = document.querySelector(".search input");
const weathericon = document.querySelector("#weather-icon");
const weatheritem = document.querySelector(".weather-item");
const error=document.querySelector(".error p");



async function dataall(city){
    let response =await fetch(apiurl + city +"&appid=" + apikey);


if( response.status === 404){
    error.style.display="block";
    weatheritem.style.display="none";
}else{ let data = await response.json();
    console.log(data);
   




    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "ºC";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed) + "km/h";


if( data.weather[0].main === "Clouds"){
    weathericon.src = "imges/clouds.png";
}else if( data.weather[0].main === "Rain"){
    weathericon.src = "imges/rain.png";
}else if( data.weather[0].main === "Clear"){
    weathericon.src = "imges/Clear.png";
}else if( data.weather[0].main === "Mist"){
    weathericon.src = "imges/mist.png";
}else if( data.weather[0].main === "Drizzle"){
    weathericon.src = "imges/drizzle.png";
}
error.style.display="none";
weatheritem.style.display="block";



}




}


searchbtn.addEventListener("click",()=>{
             dataall(searchinput.value);
})











