var xmlHttp = null;

function httpRequest() {
  var Url = "https://api.wunderground.com/api/8502af2cf7cbfe17/forecast10day/q/FL/Gainesville.json";

  xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = ProcessRequest;
  xmlHttp.open("GET", Url, true);
  xmlHttp.send(null);
}

function ProcessRequest() {
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    if (xmlHttp.responseText == "Not found") {
      day1.innerHTML = "Error - Not found";
    } else {
      var obj = JSON.parse(xmlHttp.responseText);

      day1.innerHTML = obj.forecast.simpleforecast.forecastday[0].date.weekday;
      temp1.innerHTML = "High temp: " + obj.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      day2.innerHTML = obj.forecast.simpleforecast.forecastday[1].date.weekday;
      temp2.innerHTML = "High temp: " + obj.forecast.simpleforecast.forecastday[1].high.fahrenheit;
      day3.innerHTML = obj.forecast.simpleforecast.forecastday[2].date.weekday;
      temp3.innerHTML = "High temp: " + obj.forecast.simpleforecast.forecastday[2].high.fahrenheit;
      day4.innerHTML = obj.forecast.simpleforecast.forecastday[3].date.weekday;
      temp4.innerHTML = "High temp: " + obj.forecast.simpleforecast.forecastday[3].high.fahrenheit;
      day5.innerHTML = obj.forecast.simpleforecast.forecastday[4].date.weekday;
      temp5.innerHTML = "High temp: " + obj.forecast.simpleforecast.forecastday[4].high.fahrenheit;
      day6.innerHTML = obj.forecast.simpleforecast.forecastday[5].date.weekday;
      temp6.innerHTML = "High temp: " + obj.forecast.simpleforecast.forecastday[5].high.fahrenheit;
      day7.innerHTML = obj.forecast.simpleforecast.forecastday[6].date.weekday;
      temp7.innerHTML = "High temp: " + obj.forecast.simpleforecast.forecastday[6].high.fahrenheit;
    }
  }
}
