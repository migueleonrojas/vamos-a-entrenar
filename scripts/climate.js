const d = document;

const renderClimate = (
   climate,
   chance_of_rain_selector,
   humidity_selector,
   summary_selector,
   temperature_selector,
   wind_selector
) => {

   const { chance_of_rain, humidity, summary, temperature, wind } = climate;
   const $chance_of_rain_selector = d.querySelector(chance_of_rain_selector);
   const $humidity_selector = d.querySelector(humidity_selector);
   const $summary_selector = d.querySelector(summary_selector);
   const $temperature_selector = d.querySelector(temperature_selector);
   const $wind_selector = d.querySelector(wind_selector);

   $chance_of_rain_selector.innerHTML = chance_of_rain;
   $humidity_selector.innerHTML = humidity;
   $summary_selector.innerHTML = summary;
   $temperature_selector.innerHTML = temperature;
   $wind_selector.innerHTML = wind;

}

export default renderClimate;