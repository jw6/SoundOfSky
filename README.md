<snippet>
  <content><![CDATA[

# ${1:Sound of Skype}
A 3D Audio Solution for Sonifying Weather Data
## HW #3 - Proof of Concepts & User Survey
Part I: Sonifying weather data into sounds to represent different weather metrics
## Team
Jia-Uei Chen, Jiaying Wang, Zhe Gao
## Usage
Open index.html, by clicking "Load weather data" to display wind sounds
## Plan: Using different sounds to measure weather metrics
1. Wind: White noise, by speed up the sound to determine the the value of a lowpass filter & gust speed determinds the amplitude of the output
2. Rain: The amount of rain is used to control the frequency of a sawtooth wave, the faster the sound is, the more rain has fallen.
3. Humidity: Using a pulse wave to determine the humidity, if humidity is high, then a thin and rapsy tone will be displayed, else if humidity is low, a rich tone will be displayed.
4. Temperature: A FM synthesis is used to represent the temperature, current temperature controls the pitch of the wave.

]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>
