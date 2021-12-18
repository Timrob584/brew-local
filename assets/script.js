const city = [];
const searchInput = document.getElementById("cityNameInput");
const submitBtn = document.getElementById("submitBtn");
const googleKey = "AIzaSyCQm1aQeB2zDpJD1owojwGE6O5P2IE9TyY";

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
    let citySearch = searchInput.value.trim();
    getBreweries(citySearch);
    searchInput.value = "";
    let url = "https://timrob584.github.io/brew-local/results";
    let win = window.open(url);
    win.focus();

}

submitBtn.addEventListener("click", formSubmit);