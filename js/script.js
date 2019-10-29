function hotTemperature(data) {
  return data.list[0].temp.day >= 5.00;
  //const hotTemp = data.list[0].filter(data => data.list[0].temp> 10);
}

function fromCelsiusToKelvin(data) {
  const mapK = (data.list[0].temp.day)+273.15;
  return mapK;
}

// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  /*apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-0').innerHTML = main;
      document.getElementById('today-forecast-more-info-0').innerHTML = description;
      document.getElementById('icon-weather-container-0').innerHTML = icon;
      document.getElementById('today-forecast-temp-0').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });*/


  //Permet d'afficher 4 jours de prévisions météorologiques
  apiWeather
    .getThreeDayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principale
      var i = 0;
        //4 pour Aujourd'hui et les 3 jours d'après
      for (i = 0; i < 4; i++) {
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        //const temp = data.filter(hotTemperature).list[i].temp.day;

        const temp = data.list[i].temp.day;
        //const temp = data.list[i].temp.day.fromCelsiusToKelvin(data);
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon)

        document.getElementById('today-forecast-main-'+i).innerHTML = main;
        document.getElementById('today-forecast-more-info-'+i).innerHTML = description;
        document.getElementById('icon-weather-container-'+i).innerHTML = icon;
        document.getElementById('today-forecast-temp-'+i).innerHTML = `${temp} °C`;
      }
    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}