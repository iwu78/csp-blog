// get elements from HTML for later use in program
const requestButton = document.getElementById("requestButton");
const imageDisplay = document.getElementById("display");
const cityInput = document.getElementById("cityInput");
const display = document.getElementById("display");
const scoreText = document.getElementById("score");
const guessButton = document.getElementById("guessButton");
const continentSelect = document.getElementById("continent");

// initialize variables
var currentCity = null;
var score = 0;
// images are stored in a cities folder in the same directory
// images are named CITY_NAME.png, so filename is not needed and name is sufficient
const imageFolder = 'cities/'; 
const cities = [
    {'name': 'New York City', 'continent': 'North America', 'country': 'United States of America'},
    {'name': 'Los Angeles', 'continent': 'North America', 'country': 'United States of America'},
    {'name': 'Chicago', 'continent': 'North America', 'country': 'United States of America'},
    {'name': 'Houston', 'continent': 'North America', 'country': 'United States of America'},
    {'name': 'Washington', 'continent': 'North America', 'country': 'United States of America'},
    {'name': 'Vancouver', 'continent': 'North America', 'country': 'Canada'},
    {'name': 'Montreal', 'continent': 'North America', 'country': 'Canada'},
    {'name': 'Toronto', 'continent': 'North America', 'country': 'Canada'},
    {'name': 'Mexico City', 'continent': 'North America', 'country': 'Mexico'},
    {'name': 'Caracas', 'continent': 'South America', 'country': 'Venezuela'},
    {'name': 'Bogota', 'continent': 'South America', 'country': 'Colombia'},
    {'name': 'Quito', 'continent': 'South America', 'country': 'Ecuador'},
    {'name': 'Lima', 'continent': 'South America', 'country': 'Peru'},
    {'name': 'La Paz', 'continent': 'South America', 'country': 'Bolivia'},
    {'name': 'Santiago', 'continent': 'South America', 'country': 'Chile'},
    {'name': 'Buenos Aires', 'continent': 'South America', 'country': 'Argentina'},
    {'name': 'Rio de Janeiro', 'continent': 'South America', 'country': 'Brazil'},
    {'name': 'Sao Paulo', 'continent': 'South America', 'country': 'Brazil'},
    {'name': 'Brasilia', 'continent': 'South America', 'country': 'Brazil'},
    {'name': 'London', 'continent': 'Europe', 'country': 'United Kingdom'},
    {'name': 'Paris', 'continent': 'Europe', 'country': 'France'},
    {'name': 'Madrid', 'continent': 'Europe', 'country': 'Spain'},
    {'name': 'Rome', 'continent': 'Europe', 'country': 'Italy'},
    {'name': 'Berlin', 'continent': 'Europe', 'country': 'Germany'},
    {'name': 'Vienna', 'continent': 'Europe', 'country': 'Austria'},
    {'name': 'Warsaw', 'continent': 'Europe', 'country': 'Poland'},
    {'name': 'Athens', 'continent': 'Europe', 'country': 'Greece'},
    {'name': 'Kyiv', 'continent': 'Europe', 'country': 'Ukraine'},
    {'name': 'Moscow', 'continent': 'Europe', 'country': 'Russia'},
    {'name': 'Cairo', 'continent': 'Africa', 'country': 'Egpyt'},
    {'name': 'Casablanca', 'continent': 'Africa', 'country': 'Morocco'},
    {'name': 'Khartoum', 'continent': 'Africa', 'country': 'Sudan'},
    {'name': 'Abidjan', 'continent': 'Africa', 'country': 'Ivory Coast'},
    {'name': 'Lagos', 'continent': 'Africa', 'country': 'Nigeria'},
    {'name': 'Addis Ababa', 'continent': 'Africa', 'country': 'Ethiopia'},
    {'name': 'Nairobi', 'continent': 'Africa', 'country': 'Kenya'},
    {'name': 'Dar es Salaam', 'continent': 'Africa', 'country': 'Tanzania'},
    {'name': 'Kinshasa', 'continent': 'Africa', 'country': 'Democratic Republic of the Congo'},
    {'name': 'Johannesburg', 'continent': 'Africa', 'country': 'South Africa'},
    {'name': 'Tokyo', 'continent': 'Asia', 'country': 'Japan'},
    {'name': 'Shanghai', 'continent': 'Asia', 'country': 'China'},
    {'name': 'Beijing', 'continent': 'Asia', 'country': 'China'},
    {'name': 'Jakarta', 'continent': 'Asia', 'country': 'Indonesia'},
    {'name': 'Singapore', 'continent': 'Asia', 'country': 'Singapore'},
    {'name': 'Bangkok', 'continent': 'Asia', 'country': 'Thailand'},
    {'name': 'Delhi', 'continent': 'Asia', 'country': 'India'},
    {'name': 'Mumbai', 'continent': 'Asia', 'country': 'India'},
    {'name': 'Tehran', 'continent': 'Asia', 'country': 'Iran'},
    {'name': 'Istanbul', 'continent': 'Asia', 'country': 'Turkey'},
];
// cityList is the array that the random cities will be picked from
// starts off identical to cities but will be updated accordingly when user selects a continent
var citiesInContinent = cities;

function generateCityList(continent) {
    newCityList = [];
    for (let i = 0; i < cities.length; i++) {
        if (cities[i]['continent'] == continent) {
            newCityList.push(cities[i]);
        }
    }
    return newCityList;
}

// function to update city list. This will be called whenever the continent selector is changed
function updateCityList() {
    continent = continentSelect.value;
    // if user chooses to guess cities from all continents, set cityList to cities array with all cities
    if (continent == 'all') {
        // must re-update city list, even if all is selected as user may have reselected all after trying a different continent
        citiesInContinent = cities;
    } else {
        // update citylist to new list generated by generateCityList function
        citiesInContinent = generateCityList(continent);
    }
}

// function to display satellite image of city in display div, uses name of city as filename and alternate for image as parameters
function displayCity(name, alt) {
    // if there already is a city being displayed that has has not been guessed, alert user
    // ensures that user does not try to skip cities and attempts every city
    if (currentCity != null) {
        alert("ERROR: Please guess the current city before requesting a new one!");
        // exit function, do not continue if user has not guessed existing city
        return;
    } else {
        // remove existing image from div, replaceChildren removes all children if no parameters are provided
        // this is required despite above if statement as if user makes an incorrect guess that is in the database, program will provide image of the guess
        // that guess cannot be guessed and user still needs to request a new city, but existing image will be already in div
        imageDisplay.replaceChildren();
        // create new image and update properties
        var image = document.createElement("img");
        image.src = imageFolder + name + '.png'; // source image from filepath
        image.alt = alt;
        image.id = 'satelliteImage'; // set image id for access later in the program
        image.style.height = 600; // set constant height for image to avoid guess bar and button jumping around
        image.style.width = "auto"; // setting width to auto will proportionally scale image width
        imageDisplay.appendChild(image); // add image to div
    }
}

// function to get index of city in all cities list given its name
function getIndex(city) {
    // iterate through all cities and select the one with appropriate name
    for (let i = 0; i < cities.length; i++) {
        if (cities[i]['name'] == city) {
            return i;
        }
    }
    // return null if city not found
    return null;
}

// function to select a random city and display to user
// will be called when "New City" button is clicked, therefore does not need parameters
function getNewCity() {
    // selects a random number between 0 and the length of the list inclusive, which will be the index of the random city
    // Math.random returns a random number between 0 and 1, which is then multiplied by the length of array to get number between 0 and the last city's index
    // Math.floor is then used to ensure that the number is an integer
    cityIndex = Math.floor(Math.random() * citiesInContinent.length);
    cityName = citiesInContinent[cityIndex]['name'];
    cityAlt = "Satellite Image of " + cityName;
    // call displayCity function to display image to user using city's name and alt
    displayCity(cityName, cityAlt);
    // currentCity is stored as in index so that it can be referenced when a user guesses the city
    // index however must be of city in cities list will all cities, as cityList variable that was used to generate is always changing
    // if index were to stored in terms of changing cityList, and user selects a new continent, the program would use the wrong city
    currentCity = getIndex(cityName);
}

function incorrectGuess(guess) {
    score = 0;
    scoreText.innerHTML = "Score: " + score;
    correctCity = cities[currentCity]['name'];
    country = cities[currentCity]['country'];
    image = document.getElementById('satelliteImage');
    imageDisplay.removeChild(image);
    currentCity = null;
    var guessedCountry;
    for (let j = 0; j < cities.length; j++) {
        if (cities[j]['name'] == guess) {
            guessedCountry = cities[j]['country'];
            alert("Unfortunately, the correct answer was " + correctCity + ", " + country + `.\n
            Your guess, ` + guess + ", " + guessedCountry + ", looks like this from above (see image below): ");
            displayCity(guess, "Satellite Image of " + guess);
            break;
        }
    }
    if (!guessedCountry) {
        alert("Unfortunately, the correct answer was " + correctCity + ", " + country + `.\n
        Your guess, ` + guess + ", is not a city in the database");
    }
}

// series of tasks to be ran on correct guess
function correctGuess(guess) {
    // increment score and score element, alert user that they have guessed correctly
    score += 1;
    scoreText.innerHTML = "Score: " + score;
    country = cities[currentCity]['country'];
    alert("Congratulations, the city was indeed " + guess + ", " + country + "!");
    // reset currentCity to prevent user from guessing multiple times
    currentCity = null;
    // remove image from display
    image = document.getElementById('satelliteImage');
    imageDisplay.removeChild(image);
}

function checkGuess() {
    guess = cityInput.value
    if (!guess) {
        alert("ERROR: Please enter a city name before guessing!");
    } else if (currentCity == null) {
        alert('ERROR: Please request a city by clicking the "New City" button before guessing!');
    } else {
        if (guess == cities[currentCity]['name']) {
            correctGuess(guess)
        } else {
            incorrectGuess(guess)             
        }
    }
    cityInput.value = "";
}

// update the citiesInContinent variable when the continent selector is changed
continentSelect.addEventListener('change', updateCityList);
// select and display a new city when user clicks "New City" button
requestButton.addEventListener('click', getNewCity);
// check the user's guess when they click the "Guess" button
guessButton.addEventListener('click', checkGuess);