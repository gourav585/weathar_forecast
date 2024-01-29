function getWeather() {
    const city = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa8f5aabc2db02ff39b22f51a5c3f052&units=metric`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        document.getElementById('description').textContent = data.weather[0].description;
      })
      .catch(error => {
        console.log('Error fetching weather data: ', error);
      });
  }