
let weather=
{
  apiKey: "0d87e837d6dbfc3af7cc4373525dd5a7",
  fetchWeather: function(city)
  {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&units=metric&appid="
    + this.apiKey
  )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data)
  {
    const{name} = data;
    const{icon,description} = data.weather[0];
    const {temp,humidity} = data.main;
    const{speed} = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText = "Weather In " +name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" +icon+ ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " ° C";
    document.querySelector(".humidity").innerText = "Humidity : " +humidity+ " %";
    document.querySelector(".wind").innerText = "Wind Speed : " + speed+ " km/hr";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?"+name+"')";
    document.body.style.backgroundSize = "100% 100%";
  },
  search: function()
  {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").
addEventListener("click",function()
{
  weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event)
{
  if(event.key=="Enter")
  {
    weather.search();
  }
});
weather.fetchWeather("Kolkata");
const x = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
