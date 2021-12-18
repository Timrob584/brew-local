var city = [];
var searchInput = document.getElementById("cityNameInput");
var googleKey = "AIzaSyCQm1aQeB2zDpJD1owojwGE6O5P2IE9TyY";

// Open Brewery API Call
function getBreweries(city) {
    fetch("https://api.openbrewerydb.org/breweries?by_city=" + city)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

// Runs OpenBrewery API When State is Searched
function formSubmit(event) {
    event.preventDefault();
    var citySearch = searchInput.value.trim();
    getBreweries(citySearch);
    searchInput.value = "";
}

submitBtn.addEventListener("click", formSubmit);