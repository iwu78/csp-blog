---
comments: true
layout: post
title: CityGuesser
description: This JavaScript program displays a satellite image of a random city with a population of 30,000 people or larger, and the goal of the game is to guess the city from this image. Each city correctly guessed adds one point, a wrong guess resets the score to zero. Currently, there are only cities from south and central California.
type: hacks
courses: {csp: {week: 3}}
---

<style>
input[type=submit] {
  background-color: #86BB58;
  border: 2px solid #86BB58;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
}
input[type=submit]:hover {
  background-color: white;
  border: 2px solid #86BB58;
  color: black;
}
input[type=text] {
  width: 130px;
  padding: 12px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #86BB58;
  border-radius: 4px;
  transition: width 1s ease-in-out;
}
input[type=text]:focus {
    width: 67.5%;
    border: 4px solid #5E9443;
}
 
#title-animation {
width:200px;
height:65px;
background: #92B901;
color: #ffffff;
position: relative;
font-weight:bold;
font-size:30px;
padding:10px;
animation:title-animation 5s 1;
-moz-animation:title-animation 5s 1;
-webkit-animation:title-animation 5s 1;
-o-animation:title-animation 5s 1;
border-radius:5px;
-webkit-border-radius:5px;
animation-iteration-count: infinite;
}
@keyframes title-animation
{
0% {transform: rotate(0deg);left:0px;}
25% {transform: rotate(20deg);left:0px;}
50% {transform: rotate(0deg);left:500px;}
55% {transform: rotate(0deg);left:500px;}
70% {transform: rotate(0deg);left:500px;background:#1ec7e6;}
100% {transform: rotate(-360deg);left:0px;}
}
@-webkit-keyframes title-animation
{
0% {-webkit-transform: rotate(0deg);left:0px;}
25% {-webkit-transform: rotate(20deg);left:0px;}
50% {-webkit-transform: rotate(0deg);left:500px;}
55% {-webkit-transform: rotate(0deg);left:500px;}
70% {-webkit-transform: rotate(0deg);left:500px;background:#1ec7e6;}
100% {-webkit-transform: rotate(-360deg);left:0px;}
}
@-moz-keyframes title-animation
{
0%  {-moz-transform: rotate(0deg);left:0px;}
25% {-moz-transform: rotate(20deg);left:0px;}
50%  {-moz-transform: rotate(0deg);left:500px;}
55%  {-moz-transform: rotate(0deg);left:500px;}
70%  {-moz-transform: rotate(0deg);left:500px;background:#1ec7e6;}
100% {-moz-transform: rotate(-360deg);left:0px;}
}
@-o-keyframes title-animation
{
0% {transform: rotate(0deg);left:0px;}
25% {transform: rotate(20deg);left:0px;}
50%  {transform: rotate(0deg);left:500px;}
55%  {transform: rotate(0deg);left:500px;}
70%  {transform: rotate(0deg);left:500px;background:#1ec7e6;}
100% {transform: rotate(-360deg);left:0px;}
}
</style>

<br>
<div id="title-animation">City Guesser</div>
<br>
<br>
<form id="textForm">
        <label for="textInput">Enter City:</label>
        <input type="text" id="textInput" required>
        <input type="submit" value="Guess!">
</form>
<div id="displayText"></div>
<div id="score"></div>
<div id="imageContainer"></div>

<script>
var Images = new Array()

var imageFilenames = [
    'North Tustin.jpg',
    'Cypress.jpg',
    'Manhattan Beach.jpg',
    'Glendale.jpg',
    'Walnut.jpg',
    'Fontana.jpg',
    'Ontario.jpg',
    'Visalia.jpg',
    'East Los Angeles.jpg',
    'Temescal Valley.jpg',
    'Sanger.jpg',
    'Palmdale.jpg',
    'Oceanside.jpg',
    'Highland.jpg',
    'Palm Desert.jpg',
    'Placentia.jpg',
    'Irvine.jpg',
    'Maywood.jpg',
    'Lancaster.jpg',
    'Bell Gardens.jpg',
    'Porterville.jpg',
    'Imperial Beach.jpg',
    'Rosemead.jpg',
    'Tulare.jpg',
    'Santee.jpg',
    'Ventura.jpg',
    'South Whittier.jpg',
    'La Mesa.jpg',
    'Carson.jpg',
    'San Jacinto.jpg',
    'Arcadia.jpg',
    'Laguna Hills.jpg',
    'Hollister.jpg',
    'Compton.jpg',
    'Calexico.jpg',
    'Imperial.jpg',
    'Pasadena.jpg',
    'Hesperia.jpg',
    'Rowland Heights.jpg',
    'Oildale.jpg',
    'Beaumont.jpg',
    'Lake Forest.jpg',
    'Hacienda Heights.jpg',
    'Lemoore.jpg',
    'Fountain Valley.jpg',
    'Garden Grove.jpg',
    'El Monte.jpg',
    'Santa Barbara.jpg',
    'Goleta.jpg',
    'Moreno Valley.jpg',
    'Modesto.jpg',
    'Beverly Hills.jpg',
    'Encinitas.jpg',
    'La Mirada.jpg',
    'Azusa.jpg',
    'Mission Viejo.jpg',
    'Ridgecrest.jpg',
    'Anaheim.jpg',
    'Hawthorne.jpg',
    'Dana Point.jpg',
    'Pomona.jpg',
    'South Pasadena.jpg',
    'Glendora.jpg',
    'Westmont.jpg',
    'East Niles.jpg',
    'Montclair.jpg',
    'Downey.jpg',
    'Fullerton.jpg',
    'Norco.jpg',
    'Brea.jpg',
    'Chino Hills.jpg',
    'San Gabriel.jpg',
    'Baldwin Park.jpg',
    'Diamond Bar.jpg',
    'Hanford.jpg',
    'San Diego.jpg',
    'San Bernardino.jpg',
    'Monterey Park.jpg',
    'Burbank.jpg',
    'San Marcos.jpg',
    'Temecula.jpg',
    'Banning.jpg',
    'Covina.jpg',
    'Tustin.jpg',
    'Florence-Graham.jpg',
    'Indio.jpg',
    'Monrovia.jpg',
    'Claremont.jpg',
    'Redondo Beach.jpg',
    'Laguna Niguel.jpg',
    'Coachella.jpg',
    'Culver City.jpg',
    'Lompoc.jpg',
    'San Clemente.jpg',
    'San Luis Obispo.jpg',
    'Barstow.jpg',
    'Clovis.jpg',
    'Corona.jpg',
    'Rialto.jpg',
    'Redlands.jpg',
    'West Whittier-Los Nietos.jpg',
    'Santa Paula.jpg',
    'Bakersfield.jpg',
    'Merced.jpg',
    'Lake Elsinore.jpg',
    'Westminster.jpg',
    'Ceres.jpg',
    'Montebello.jpg',
    'West Covina.jpg',
    'Newport Beach.jpg',
    'Alhambra.jpg',
    'Torrance.jpg',
    'Rancho Cucamonga.jpg',
    'Bellflower.jpg',
    'Desert Hot Springs.jpg',
    'Yucaipa.jpg',
    'Gardena.jpg',
    'Hemet.jpg',
    'Santa Monica.jpg',
    'Delano.jpg',
    'Paramount.jpg',
    'Fresno.jpg',
    'Cathedral City.jpg',
    'Inglewood.jpg',
    'Ladera Ranch.jpg',
    'Colton.jpg',
    'Adelanto.jpg',
    'Apple Valley.jpg',
    'Rancho Palos Verdes.jpg',
    'Murrieta.jpg',
    'Paso Robles.jpg',
    'Lakewood.jpg',
    'Wildomar.jpg',
    'La Verne.jpg',
    'Oxnard.jpg',
    'Thousand Oaks.jpg',
    'El Centro.jpg',
    'Atascadero.jpg',
    'Whittier.jpg',
    'Santa Maria.jpg',
    'Spring Valley.jpg',
    'National City.jpg',
    'La Habra.jpg',
    'Monterey.jpg',
    'Los Banos.jpg',
    'Los Angeles.jpg',
    'La Puente.jpg',
    'Orange.jpg',
    'Aliso Viejo.jpg',
    'Chino.jpg',
    'Menifee.jpg',
    'Twentynine Palms.jpg',
    'Pico Rivera.jpg',
    'Vista.jpg',
    'Orcutt.jpg',
    'Wasco.jpg',
    'Salinas.jpg',
    'La Quinta.jpg',
    'Moorpark.jpg',
    'El Cajon.jpg',
    'Lemon Grove.jpg',
    'Palm Springs.jpg',
    'Norwalk.jpg',
    'Lawndale.jpg',
    'Fallbrook.jpg',
    'Huntington Park.jpg',
    'Altadena.jpg',
    'Yorba Linda.jpg',
    'Buena Park.jpg',
    'Jurupa Valley.jpg',
    'Chula Vista.jpg',
    'Camarillo.jpg',
    'Escondido.jpg',
    'South Gate.jpg',
    'Stanton.jpg',
    'Huntington Beach.jpg',
    'Poway.jpg',
    'Atwater.jpg',
    'Seal Beach.jpg',
    'Cerritos.jpg',
    'Santa Clarita.jpg',
    'Simi Valley.jpg',
    'San Dimas.jpg',
    'West Hollywood.jpg',
    'Eastvale.jpg',
    'Eastern Goleta Valley.jpg',
    'Temple City.jpg',
    'Turlock.jpg',
    'Costa Mesa.jpg',
    'La Presa.jpg',
    'Lynwood.jpg',
    'Victorville.jpg',
    'Madera.jpg',
    'Bell.jpg',
    'Seaside.jpg',
    'Long Beach.jpg',
    'Upland.jpg',
    'San Juan Capistrano.jpg',
    'Rancho Santa Margarita.jpg',
    'Reedley.jpg',
    'Santa Ana.jpg',
    'Riverside.jpg',
    'French Valley.jpg',
];

var folderPath = '../../../images/cities';
imageFilenames.forEach(function (filename) {
    Images.push(folderPath + '/' + filename);
});

new_image = 1;
var whichImage;
var score = 0;
var j = 0;
var p = Images.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = Images[i]
}

function showImage(){
    whichImage = Math.round(Math.random() * (p - 1));
    var imageContainer = document.getElementById('imageContainer');
    var imageElement = document.createElement('img');
    imageElement.src = Images[whichImage];
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);
}

showImage()


const textForm = document.getElementById('textForm');
const textInput = document.getElementById('textInput');
const displayText = document.getElementById('displayText');
const Score = document.getElementById('score');

textForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const enteredText = textInput.value;
    if (enteredText === Images[whichImage].slice(23, -4)) {
        score = score + 1
        Score.textContent = 'Score: ' + score
        displayText.textContent = 'Correct, the city was ' + Images[whichImage].slice(23, -4) + '.';
    } else {
        displayText.textContent = 'Unfortunately, that was incorrect. The city was ' + Images[whichImage].slice(23, -4) + '.';
        score = 0
        Score.textContent = 'Score: ' + score
    }
    showImage();
    textInput.value = '';
});

</script>