// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
//const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER {
  constructor() {
    // Si la ville n'est pas définit alors la ville par défault est Paris
    /*if(city === undefined){
      city = "paris";
    }*/

    //La ville est rentrée par l'utilisateur
    var city;
    var input = document.getElementById("city-input").value;

    if(input == ""){
      city = "paris";
    }
    else{
      city = input;
    }
     
    this.city = city;
  }


  // Faire la requete à l'API openweathermap
  // Retourne une promise
  /*fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }*/

  //Retourne quatres prévisions
  getThreeDayForecast() {
    return axios
      .get(`${API_URL}?q=${this.city}&units=metric&cnt=4&appid=${API_KEY}`, {
        crossdomain: true
      })
  }

  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon) {
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}