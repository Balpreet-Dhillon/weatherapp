const storage = new Storage()

//Getting the Stored Location Data
const weatherLocation = storage.getLocationData()

//Initializing the Weather Class
const weather = new Weather(weatherLocation.city, weatherLocation.country)

//Initializing the UI Class
const ui = new UI()

//Getting the Weather on the DOM Load
document.addEventListener('DOMContentLoaded', getWeather)

//Changing the Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value

  //Changing the Location
  weather.changeLocation(city, country);

  //Setting the Location in Local Storage
  storage.setLocationData(city, country);

  //Getting and Displaying the Weather
  getWeather();

  //Closing Modal
  $('#locModal').modal('hide')
  const modal = document.getElementById('locModal')
})

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results)
    })
    .catch(err => console.log(err))
}