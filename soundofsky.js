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
        windSound.play()
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
    /*document.getElementById("DataList").innerHTML = "<button type='button1' onclick='showLoadForm();'>Back </button>";*/
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

    if (xmlHttp.responseText == "Not found") {
      day1.innerHTML = "Error - Not found";
    } else {
      var obj = JSON.parse(xmlHttp.responseText);

      day1.innerHTML = obj.forecast.simpleforecast.forecastday[0].date.weekday;
      tag1.innerHTML = "Wind speed: " + obj.forecast.simpleforecast.forecastday[0].avewind.mph; + "mph";
      tag1a.innerHTML = "Wind direction: " + obj.forecast.simpleforecast.forecastday[0].avewind.dir;

      day2.innerHTML = obj.forecast.simpleforecast.forecastday[1].date.weekday;
      tag2.innerHTML = "Wind speed: " + obj.forecast.simpleforecast.forecastday[1].avewind.mph; + "mph";
      tag2a.innerHTML = "Wind direction: " + obj.forecast.simpleforecast.forecastday[1].avewind.dir;

      day3.innerHTML = obj.forecast.simpleforecast.forecastday[2].date.weekday;
      tag3.innerHTML = "Wind speed: " + obj.forecast.simpleforecast.forecastday[2].avewind.mph; + "mph";
      tag3a.innerHTML = "Wind direction: " + obj.forecast.simpleforecast.forecastday[2].avewind.dir;

      day4.innerHTML = obj.forecast.simpleforecast.forecastday[3].date.weekday;
      tag4.innerHTML = "Wind speed: " + obj.forecast.simpleforecast.forecastday[3].avewind.mph; + "mph";
      tag4a.innerHTML = "Wind direction: " + obj.forecast.simpleforecast.forecastday[3].avewind.dir;

      day5.innerHTML = obj.forecast.simpleforecast.forecastday[4].date.weekday;
      tag5.innerHTML = "Wind speed: " + obj.forecast.simpleforecast.forecastday[4].avewind.mph; + "mph";
      tag5a.innerHTML = "Wind direction: " + obj.forecast.simpleforecast.forecastday[4].avewind.dir;

      day6.innerHTML = obj.forecast.simpleforecast.forecastday[5].date.weekday;
      tag6.innerHTML = "Wind speed: " + obj.forecast.simpleforecast.forecastday[5].avewind.mph; + "mph";
      tag6a.innerHTML = "Wind direction: " + obj.forecast.simpleforecast.forecastday[5].avewind.dir;

      day7.innerHTML = obj.forecast.simpleforecast.forecastday[6].date.weekday;
      tag7.innerHTML = "Wind speed: " + obj.forecast.simpleforecast.forecastday[6].avewind.mph; + "mph";
      tag7a.innerHTML = "Wind direction: " + obj.forecast.simpleforecast.forecastday[6].avewind.dir;
    }
  }
    document.getElementById("LoadData").style.display = "none";
    document.getElementById("DataList").style.display = "block";

}

function showLoadForm() {
    document.getElementById("LoadData").style.display = "block";
    document.getElementById("DataList").style.display = "none";
}
