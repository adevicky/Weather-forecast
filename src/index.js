function formattedTime(date){
 let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     let day =days[now.getDay()];
     let hours= now.getHours();
     if (hours < 10) {
         hours= `0${hours}`;
     }
let minutes= now.getMinutes();
if (minutes < 10)
minutes= `0${minutes}`;   

return `${day}, ${hours}:${minutes}`;
} 
let now= new Date();
let realTme= document.querySelector("#date-now");
realTme.innerHTML=formattedTime(now);

function displayWeatherCondition(response) {
  document.querySelector("#location").innerHTML =response.data.name;
    document.querySelector("#temprature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#description").innerHTML = response.data.weather[0].main;
     document.querySelector("#humidity").innerHTML = response.data.main.humidity;
      document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    }
 function search(city) {
   let apiKey= "6e28aff5cc0608c0525e4afec6ebc572";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
axios.get(apiUrl).then(displayWeatherCondition);

 }
function handleSubmit(event)  {
    event.preventDefault();
    let city=document.querySelector("#city-input").value
   search(city); 
}

let searchForm= document.querySelector("#search-form");
searchForm.addEventListener("submit",handleSubmit);

function searchLocation(position) {
   let apiKey= "6e28aff5cc0608c0525e4afec6ebc572";
   let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;
   axios.get(apiUrl).then(displayWeatherCondition);
}

function locationButton(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function convertToFarhenheit(event){
  event.preventDefault();
  let tempratureElement= dodcument.querySelector("#temprature");
tempratureElement.innerHTML= 66;
}
let farhenheitlink= document.querySelector("#farhenheit-link");
farhenheitlink.addEventListener("click",convertToFarhenheit);

function convertToCelsius(event){
  event.preventDefault();
let tempratureElement= document.querySelector("#temprature");
tempratureElement.innerHTML= 19;
}
let celsiuslink= document.querySelector("#celsius-link");
celsiuslink.addEventListener("click", convertToCelsius);

let currentLocation= document.querySelector("#current-icon");
currentLocation.addEventListener("click", locationButton);
 


