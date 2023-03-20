
function setWindChill(windSpeed, temperature) {
  let temperatureSpan = document.querySelector("#temperature");
  let windSpeedSpan = document.querySelector("#windspeed");
  let windChillSpan = document.querySelector("#windchill");

  let windChillMessage = "N/A";
  if (windSpeed >= 3.0 && temperature <= 50) {
    let chill = Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
    windChillMessage = `${chill}`;
  }

  temperatureSpan.textContent = temperature;
  windSpeedSpan.textContent = windSpeed;
  windChillSpan.innerHTML = windChillMessage;
}

const weatherIcon = document.querySelector("#weathericon");
const weatherDesc = document.querySelector("#weatherdesc");

// This is the lat/lon for Fairbanks, AK. You will want to change this to your chamber city when using this in your project
const LAT = "40.4141";
const LON = "-111.7585";
const APIKEY = "be32833d7239c63fb1ec02ebf74bf9fc";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayResults(weatherData) {
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
  const desc = weatherData.weather[0].description;
  const main = weatherData.weather[0].main;
  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherDesc.textContent = main; 
  setWindChill(weatherData.wind.speed.toFixed(0), weatherData.main.temp.toFixed(0));
}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();