

let temperature = Math.floor(Math.random()* 40 - 10);
console.log(temperature); //to check if numbers generated correctly
document.getElementById("random-num").innerHTML = temperature;

if (temperature <= 10 && temperature >= 0)
    { 
    document.getElementById("weather-status").innerHTML = "The weather is cool";
    document.getElementById("img-weather-status").innerHTML = "<img src='/weather app/icons weather/clouds.svg' width='30' height='30'>";
}

else if (temperature <= 10)
    { 
    document.getElementById("weather-status").innerHTML = "The weather is very cold";
    document.getElementById("img-weather-status").innerHTML = "<img src='/weather app/icons weather/very cold.svg' width='30' height='30'>";
        
}

else if (temperature <= 20)
    { 
       
     document.getElementById("weather-status").innerHTML = "The weather is warm";
     document.getElementById("img-weather-status").innerHTML = "<img src='/weather app/icons weather/sun.svg' width='30' height='30'>";
    }

else {
     document.getElementById("weather-status").innerHTML = "The weather is hot";
     document.getElementById("img-weather-status").innerHTML = "<img src='/weather app/icons weather/sun.svg' width='30' height='30'>";
    }