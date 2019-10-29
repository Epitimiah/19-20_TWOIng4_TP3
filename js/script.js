function fromCelsiusToKelvin(val) {
  return val = val+273.15;
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
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        //Filter, Map, Sort       
        /*const hotTemperature = data.list[i].filter(data => data.list[i].temp> 10);
        console.log(hotTemperature);
        //const hotTemperature = data.filter(hotTemperature).list[i].temp.day;

        const mapK = (data.list[i].temp.day).map(fromCelsiusToKelvin);
        console.log(mapK);
        
        const sorted = (data.list[i].temp.day).sort();
        console.log(sorted);*/

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