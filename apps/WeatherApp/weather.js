let city;
const api = '335fde9f817b54b2a5fe2c5b56832870';
window.finish_temp = null;
window.weather = null;
window.wind_speed = null;
window.humidity = null;
window.pressure = null;
window.feels_like = null;
function submit(){
    city = document.getElementById('input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
  .then((response) => {
    if (!response.ok) {
        document.getElementById('weather').innerHTML = "";
        document.getElementById('pressure').innerHTML = "";
        document.getElementById('feels_like').innerHTML = "";
        document.getElementById('humidity').innerHTML = "";
        document.getElementById('wind_speed').innerHTML = "";
        document.getElementById("finishTemp").innerHTML = "This location Doesn't exist.";
    }
    return response.json();
  })
  .then((data) => {

    let temperature = data.main.temp;
    temperature -= 273.15;
    temperature = Math.floor(temperature);
    window.finish_temp = temperature;
    
    document.getElementById("finishTemp").innerHTML = window.finish_temp + '°C';
    
    const weatherDescription = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    let feels_like = data.main.feels_like;
    feels_like -= 273.15;
    feels_like = Math.floor(feels_like);
    window.weather = ("Weather: "+weatherDescription);
    window.pressure =  ("Pressure: "+pressure+" hPa");
    window.wind_speed = ("Wind speed: "+windSpeed+" m/s");
    window.feels_like = ("Feels like: "+feels_like+ '°C');
    window.humidity = ("Humidity: "+humidity+ '%');
    
    
    document.getElementById("weather").innerHTML = window.weather;
    document.getElementById("pressure").innerHTML = window.pressure;
    document.getElementById("humidity").innerHTML = window.humidity;
    document.getElementById("wind_speed").innerHTML = window.wind_speed;
    document.getElementById("feels_like").innerHTML = window.feels_like;


  
    console.log(`Temperature in ${city}: ${temperature}°C`);
    console.log(`Weather: ${weatherDescription}`);
    console.log(`Wind Speed: ${windSpeed} m/s`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Pressure: ${pressure}hPa`);
    console.log(`Feels like: ${feels_like}°C`);
    
    
  })
  .catch((error) => {
    console.log('There was a problem with the fetch operation:');
  });
}


