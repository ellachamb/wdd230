const dayOneTemp = document.querySelector('#dayone');
const dayTwoTemp = document.querySelector('#daytwo');
const dayThreeTemp = document.querySelector('#daythree');

const apikey1 = '0e9d53280c71bec4f15d4575174c7517';
const lat1 = '33.1581';
const lon1 = '-117.3506';

const url1 = `https://api.openweathermap.org/data/2.5/forecast?lat={lat1}&lon={lon1}&appid={apikey1}&units=imperial`;

function display(weatherData) {
    dayOneTemp.innerHTML = `<strong>${weatherData.list.main.temp.toFixed(0)}</strong>`;
    dayTwoTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    dayTwoTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  }

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        //displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();