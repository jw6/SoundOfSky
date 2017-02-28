var xmlHttp = null;

function httpRequest() {
  var Url = "https://api.wunderground.com/api/8502af2cf7cbfe17/forecast10day/q/FL/Gainesville.json";

  xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = ProcessRequest;
  xmlHttp.open("GET", Url, true);
  xmlHttp.send(null);
}

function playsound0(){
        document.getElementById("wind").src = "SE/wind0.mp3";
        document.getElementById("windSound").load();
        var windSound = document.getElementById("windSound");
        var tempSound = document.getElementById("tempSound");
        windSound.play();
    }

    function playsound1(){
        document.getElementById("wind").src = "SE/wind1.mp3";
        document.getElementById("windSound").load();
        var windSound = document.getElementById("windSound");
        windSound.play()
    }

    function playsound2(){
        document.getElementById("wind").src = "SE/wind2.mp3";
        document.getElementById("windSound").load();
        var windSound = document.getElementById("windSound");
        windSound.play()
    }

    function playsound3(){
        document.getElementById("wind").src = "SE/wind3.mp3";
        document.getElementById("windSound").load();
        var windSound = document.getElementById("windSound");
        windSound.play()
    }

    function playsound4(){
        document.getElementById("wind").src = "SE/wind4.mp3";
        document.getElementById("windSound").load();
        var windSound = document.getElementById("windSound");
        windSound.play()
    }

    function playsound5(){
        document.getElementById("wind").src = "SE/wind5.mp3";
        document.getElementById("windSound").load();
        var windSound = document.getElementById("windSound");
        windSound.play()
    }

    function playsound6(){
        document.getElementById("wind").src = "SE/wind6.mp3";
        document.getElementById("windSound").load();
        var windSound = document.getElementById("windSound");
        windSound.play()
    }



function ProcessRequest() {
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

    if (xmlHttp.responseText == "Not found") {
      date1.innerHTML = "Error - Not found";
    } else {
      var obj = JSON.parse(xmlHttp.responseText);

      day1.innerHTML = obj.forecast.simpleforecast.forecastday[0].date.weekday;
      date1.innerHTML = obj.forecast.simpleforecast.forecastday[0].date.weekday + " (" 
                          + obj.forecast.simpleforecast.forecastday[0].date.monthname + " "
                          + obj.forecast.simpleforecast.forecastday[0].date.day + ", "
                          + obj.forecast.simpleforecast.forecastday[0].date.year + ")";
      weather1.innerHTML = "High temperature: " + obj.forecast.simpleforecast.forecastday[0].high.fahrenheit + "&deg F"
                            + "<br>"
                            + "Low temperature: " + obj.forecast.simpleforecast.forecastday[0].low.fahrenheit + "&deg F"
                            + "<br>"
                            + "Wind speed: " + obj.forecast.simpleforecast.forecastday[0].avewind.mph + " mph"
                            + "<br>"
                            + "Wind direction: " + obj.forecast.simpleforecast.forecastday[0].avewind.dir;

      day2.innerHTML = obj.forecast.simpleforecast.forecastday[1].date.weekday;
      date2.innerHTML = obj.forecast.simpleforecast.forecastday[1].date.weekday + " (" 
                          + obj.forecast.simpleforecast.forecastday[1].date.monthname + " "
                          + obj.forecast.simpleforecast.forecastday[1].date.day + ", "
                          + obj.forecast.simpleforecast.forecastday[1].date.year + ")";
      weather2.innerHTML = "High temperature: " + obj.forecast.simpleforecast.forecastday[1].high.fahrenheit + "&deg F"
                            + "<br>"
                            + "Low temperature: " + obj.forecast.simpleforecast.forecastday[1].low.fahrenheit + "&deg F"
                            + "<br>"
                            + "Wind speed: " + obj.forecast.simpleforecast.forecastday[1].avewind.mph + " mph"
                            + "<br>"
                            + "Wind direction: " + obj.forecast.simpleforecast.forecastday[1].avewind.dir;

      day3.innerHTML = obj.forecast.simpleforecast.forecastday[2].date.weekday;
      date3.innerHTML = obj.forecast.simpleforecast.forecastday[2].date.weekday + " (" 
                          + obj.forecast.simpleforecast.forecastday[2].date.monthname + " "
                          + obj.forecast.simpleforecast.forecastday[2].date.day + ", "
                          + obj.forecast.simpleforecast.forecastday[2].date.year + ")";
      weather3.innerHTML = "High temperature: " + obj.forecast.simpleforecast.forecastday[2].high.fahrenheit + "&deg F"
                            + "<br>"
                            + "Low temperature: " + obj.forecast.simpleforecast.forecastday[2].low.fahrenheit + "&deg F"
                            + "<br>"
                            + "Wind speed: " + obj.forecast.simpleforecast.forecastday[2].avewind.mph + " mph"
                            + "<br>"
                            + "Wind direction: " + obj.forecast.simpleforecast.forecastday[2].avewind.dir;

      day4.innerHTML = obj.forecast.simpleforecast.forecastday[3].date.weekday;
      date4.innerHTML = obj.forecast.simpleforecast.forecastday[3].date.weekday + " (" 
                          + obj.forecast.simpleforecast.forecastday[3].date.monthname + " "
                          + obj.forecast.simpleforecast.forecastday[3].date.day + ", "
                          + obj.forecast.simpleforecast.forecastday[3].date.year + ")";
      weather4.innerHTML = "High temperature: " + obj.forecast.simpleforecast.forecastday[3].high.fahrenheit + "&deg F"
                            + "<br>"
                            + "Low temperature: " + obj.forecast.simpleforecast.forecastday[3].low.fahrenheit + "&deg F"
                            + "<br>"
                            + "Wind speed: " + obj.forecast.simpleforecast.forecastday[3].avewind.mph + " mph"
                            + "<br>"
                            + "Wind direction: " + obj.forecast.simpleforecast.forecastday[3].avewind.dir;

      day5.innerHTML = obj.forecast.simpleforecast.forecastday[4].date.weekday;
      date5.innerHTML = obj.forecast.simpleforecast.forecastday[4].date.weekday + " (" 
                          + obj.forecast.simpleforecast.forecastday[4].date.monthname + " "
                          + obj.forecast.simpleforecast.forecastday[4].date.day + ", "
                          + obj.forecast.simpleforecast.forecastday[4].date.year + ")";
      weather5.innerHTML = "High temperature: " + obj.forecast.simpleforecast.forecastday[4].high.fahrenheit + "&deg F"
                            + "<br>"
                            + "Low temperature: " + obj.forecast.simpleforecast.forecastday[4].low.fahrenheit + "&deg F"
                            + "<br>"
                            + "Wind speed: " + obj.forecast.simpleforecast.forecastday[4].avewind.mph + " mph"
                            + "<br>"
                            + "Wind direction: " + obj.forecast.simpleforecast.forecastday[4].avewind.dir;

      day6.innerHTML = obj.forecast.simpleforecast.forecastday[5].date.weekday;
      date6.innerHTML = obj.forecast.simpleforecast.forecastday[5].date.weekday + " (" 
                          + obj.forecast.simpleforecast.forecastday[5].date.monthname + " "
                          + obj.forecast.simpleforecast.forecastday[5].date.day + ", "
                          + obj.forecast.simpleforecast.forecastday[5].date.year + ")";
      weather6.innerHTML = "High temperature: " + obj.forecast.simpleforecast.forecastday[5].high.fahrenheit + "&deg F"
                            + "<br>"
                            + "Low temperature: " + obj.forecast.simpleforecast.forecastday[5].low.fahrenheit + "&deg F"
                            + "<br>"
                            + "Wind speed: " + obj.forecast.simpleforecast.forecastday[5].avewind.mph + " mph"
                            + "<br>"
                            + "Wind direction: " + obj.forecast.simpleforecast.forecastday[5].avewind.dir;

      day7.innerHTML = obj.forecast.simpleforecast.forecastday[6].date.weekday;
      date7.innerHTML = obj.forecast.simpleforecast.forecastday[6].date.weekday + " (" 
                          + obj.forecast.simpleforecast.forecastday[6].date.monthname + " "
                          + obj.forecast.simpleforecast.forecastday[6].date.day + ", "
                          + obj.forecast.simpleforecast.forecastday[6].date.year + ")";
      weather7.innerHTML = "High temperature: " + obj.forecast.simpleforecast.forecastday[6].high.fahrenheit + "&deg F"
                            + "<br>"
                            + "Low temperature: " + obj.forecast.simpleforecast.forecastday[6].low.fahrenheit + "&deg F"
                            + "<br>"
                            + "Wind speed: " + obj.forecast.simpleforecast.forecastday[6].avewind.mph + " mph"
                            + "<br>"
                            + "Wind direction: " + obj.forecast.simpleforecast.forecastday[6].avewind.dir;

    }
  }
    document.getElementById("LoadData").style.display = "none";
    document.getElementById("DataList").style.display = "block";

}

function showLoadForm() {
    document.getElementById("LoadData").style.display = "block";
    document.getElementById("DataList").style.display = "none";
}
