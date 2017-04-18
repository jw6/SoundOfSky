var xmlHttp = null;
var temp = new Array(7);
var windSpeed = new Array(7);
var windDirection = new Array(7);
var humid = new Array(7);


function httpRequest() {
    var Url = "https://api.wunderground.com/api/8502af2cf7cbfe17/forecast10day/q/FL/Gainesville.json";

    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = ProcessRequest;
    xmlHttp.open("GET", Url, true);
    xmlHttp.send(null);
}

function playTempSound(index) {
    var inputTemp = temp[index];
    if (inputTemp >= 100) {
        document.getElementById("temp").src = "SE/a4.wav";
    }
    else if (inputTemp >= 90) {
        document.getElementById("temp").src = "SE/f4.wav";
    }
    else if (inputTemp >= 80) {
        document.getElementById("temp").src = "SE/c4.wav";
    }
    else if (inputTemp >= 70) {
        document.getElementById("temp").src = "SE/a3.wav";
    }
    else if (inputTemp >= 60) {
        document.getElementById("temp").src = "SE/f3.wav";
    }
    else if (inputTemp >= 50) {
        document.getElementById("temp").src = "SE/c3.wav";
    }
    else if (inputTemp >= 40) {
        document.getElementById("temp").src = "SE/a2.wav";
    }
    else if (inputTemp >= 30) {
        document.getElementById("temp").src = "SE/f2.wav";
    }
    else if (inputTemp >= 20) {
        document.getElementById("temp").src = "SE/c2.wav";
    }
    else {
        document.getElementById("temp").src = "SE/a1.wav";
    }
    document.getElementById("tempSound").load();
}

function playWindSound(index) {
    var inputWindSpeed = windSpeed[index];
    if (inputWindSpeed >= 100){
        decideWindSound(1, index);
    }
    else if (inputWindSpeed >= 55) {
        decideWindSound(0.8, index);
    }
    else if (inputWindSpeed >= 39) {
        decideWindSound(0.7, index);
    }
    else if (inputWindSpeed >= 25) {
        decideWindSound(0.6, index);
    }
    else if (inputWindSpeed >= 19) {
        decideWindSound(0.5, index);
    }
    else if (inputWindSpeed >= 13) {
        decideWindSound(0.4, index);
    }
    else if (inputWindSpeed >= 8) {
        decideWindSound(0.3, index);
    }
    else if (inputWindSpeed >= 4) {
        decideWindSound(0.2, index);
    }
    else {
        decideWindSound(0.1, index);
    }
}

function decideWindSound(volume, index)
{
    var inputWindDir = windDirection[index];
    if (inputWindDir == "N")
    {
        document.getElementById("wind").src = "SE/wind_n.wav"
    }
    else if(inputWindDir == "W")
    {
        document.getElementById("wind").src = "SE/wind_w.wav"
    }
    else if(inputWindDir == "E")
    {
        document.getElementById("wind").src = "SE/wind_e.wav"
    }
    else if(inputWindDir == "S")
    {
        document.getElementById("wind").src = "SE/wind_s.wav"
    }
    else if(inputWindDir.includes("NE"))
    {
        document.getElementById("wind").src = "SE/wind_ne.wav"
    }
    else if(inputWindDir.includes("SE"))
    {
        document.getElementById("wind").src = "SE/wind_se.wav"
    }
    else if(inputWindDir.includes("NW"))
    {
        document.getElementById("wind").src = "SE/wind_nw.wav"
    }
    else if(inputWindDir.includes("SW"))
    {
        document.getElementById("wind").src = "SE/wind_sw.wav"
    }
    document.getElementById("windSound").load();

    var tempWindSound = document.getElementById("windSound");
    tempWindSound.volume = volume;
}

function playHumidSound(index) {
    var inputHumid = humid[index];
    var humidVol = 1;
    if (inputHumid <= 10) {
        humidVol = 0.1;
    }
    else if (inputHumid <= 20) {
        humidVol = 0.2;
    }
    else if (inputHumid <= 30) {
        humidVol = 0.3;
    }
    else if (inputHumid <= 40) {
        humidVol = 0.4;
    }
    else if (inputHumid <= 50) {
        humidVol = 0.5;
    }
    else if (inputHumid <= 60) {
        humidVol = 0.6;
    }
    else if (inputHumid <= 70) {
        humidVol = 0.7;
    }
    else if (inputHumid <= 80) {
        humidVol = 0.8;
    }
    else if (inputHumid <= 90) {
        humidVol = 0.9;
    }
    document.getElementById("humid").src = "SE/drum.wav";
    document.getElementById("humidSound").load();
    document.getElementById("humidSound").volume = humidVol;
}

function playsound0() {
    playTempSound(0);
    playWindSound(0);
    playHumidSound(0);

    var windSound = document.getElementById("windSound");
    var tempSound = document.getElementById("tempSound");
    var humidSound = document.getElementById("humidSound");
    windSound.play();
    tempSound.play();
    humidSound.play();
}

function playsound1() {
    playTempSound(1);
    playWindSound(1);
    playHumidSound(1);

    var windSound = document.getElementById("windSound");
    var tempSound = document.getElementById("tempSound");
    var humidSound = document.getElementById("humidSound");
    windSound.play();
    tempSound.play();
    humidSound.play();
}

function playsound2() {
    playTempSound(2);
    playWindSound(2);
    playHumidSound(2);

    var windSound = document.getElementById("windSound");
    var tempSound = document.getElementById("tempSound");
    var humidSound = document.getElementById("humidSound");
    windSound.play();
    tempSound.play();
    humidSound.play();
}

function playsound3() {
    playTempSound(3);
    playWindSound(3);
    playHumidSound(3);

    var windSound = document.getElementById("windSound");
    var tempSound = document.getElementById("tempSound");
    var humidSound = document.getElementById("humidSound");
    windSound.play();
    tempSound.play();
    humidSound.play();
}

function playsound4() {
    playTempSound(4);
    playWindSound(4);
    playHumidSound(4);

    var windSound = document.getElementById("windSound");
    var tempSound = document.getElementById("tempSound");
    var humidSound = document.getElementById("humidSound");
    windSound.play();
    tempSound.play();
    humidSound.play();
}

function playsound5() {
    playTempSound(5);
    playWindSound(5);
    playHumidSound(5);

    var windSound = document.getElementById("windSound");
    var tempSound = document.getElementById("tempSound");
    var humidSound = document.getElementById("humidSound");
    windSound.play();
    tempSound.play();
    humidSound.play();
}

function playsound6() {
    playTempSound(6);
    playWindSound(6);
    playHumidSound(6);

    var windSound = document.getElementById("windSound");
    var tempSound = document.getElementById("tempSound");
    var humidSound = document.getElementById("humidSound");
    windSound.play();
    tempSound.play();
    humidSound.play();
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
            document.getElementById("img1").src = obj.forecast.simpleforecast.forecastday[0].icon_url;
            temp[0] = obj.forecast.simpleforecast.forecastday[0].high.fahrenheit;
            windSpeed[0] = obj.forecast.simpleforecast.forecastday[0].avewind.mph;
            windDirection[0] = obj.forecast.simpleforecast.forecastday[0].avewind.dir;
            humid[0] = obj.forecast.simpleforecast.forecastday[0].avehumidity;

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
            document.getElementById("img2").src = obj.forecast.simpleforecast.forecastday[1].icon_url;
            temp[1] = obj.forecast.simpleforecast.forecastday[1].high.fahrenheit;
            windSpeed[1] = obj.forecast.simpleforecast.forecastday[1].avewind.mph;
            windDirection[1] = obj.forecast.simpleforecast.forecastday[1].avewind.dir;
            humid[1] = obj.forecast.simpleforecast.forecastday[1].avehumidity;

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
            document.getElementById("img3").src = obj.forecast.simpleforecast.forecastday[2].icon_url;
            temp[2] = obj.forecast.simpleforecast.forecastday[2].high.fahrenheit;
            windSpeed[2] = obj.forecast.simpleforecast.forecastday[2].avewind.mph;
            windDirection[2] = obj.forecast.simpleforecast.forecastday[2].avewind.dir;
            humid[2] = obj.forecast.simpleforecast.forecastday[2].avehumidity;

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
            document.getElementById("img4").src = obj.forecast.simpleforecast.forecastday[3].icon_url;
            temp[3] = obj.forecast.simpleforecast.forecastday[3].high.fahrenheit;
            windSpeed[3] = obj.forecast.simpleforecast.forecastday[3].avewind.mph;
            windDirection[3] = obj.forecast.simpleforecast.forecastday[3].avewind.dir;
            humid[3] = obj.forecast.simpleforecast.forecastday[3].avehumidity;

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
            document.getElementById("img5").src = obj.forecast.simpleforecast.forecastday[4].icon_url;
            temp[4] = obj.forecast.simpleforecast.forecastday[4].high.fahrenheit;
            windSpeed[4] = obj.forecast.simpleforecast.forecastday[4].avewind.mph;
            windDirection[4] = obj.forecast.simpleforecast.forecastday[4].avewind.dir;
            humid[4] = obj.forecast.simpleforecast.forecastday[4].avehumidity;

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
            document.getElementById("img6").src = obj.forecast.simpleforecast.forecastday[5].icon_url;
            temp[5] = obj.forecast.simpleforecast.forecastday[5].high.fahrenheit;
            windSpeed[5] = obj.forecast.simpleforecast.forecastday[5].avewind.mph;
            windDirection[5] = obj.forecast.simpleforecast.forecastday[5].avewind.dir;
            humid[5] = obj.forecast.simpleforecast.forecastday[5].avehumidity;

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
            document.getElementById("img7").src = obj.forecast.simpleforecast.forecastday[6].icon_url;
            temp[6] = obj.forecast.simpleforecast.forecastday[6].high.fahrenheit;
            windSpeed[6] = obj.forecast.simpleforecast.forecastday[6].avewind.mph;
            windDirection[6] = obj.forecast.simpleforecast.forecastday[6].avewind.dir;
            humid[6] = obj.forecast.simpleforecast.forecastday[6].avehumidity;

        }
    }
    document.getElementById("LoadData").style.display = "none";
    document.getElementById("DataList").style.display = "block";

}

function showLoadForm() {
    document.getElementById("LoadData").style.display = "block";
    document.getElementById("DataList").style.display = "none";
}
