// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apikey = 'be32833d7239c63fb1ec02ebf74bf9fc';
const lat = '33.1581';
const lon = '-117.3506';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    const desc = weatherData.weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;  

  }

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();