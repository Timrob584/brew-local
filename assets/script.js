const city = [];
const searchInput = document.getElementById("cityNameInput");
const submitBtn = document.getElementById("submitBtn");
const googleKey = "AIzaSyCQm1aQeB2zDpJD1owojwGE6O5P2IE9TyY";

const brewery1 = document.getElementById("brewery1");
const brewery2 = document.getElementById("brewery2");
const brewery3 = document.getElementById("brewery3");
const brewery4 = document.getElementById("brewery4");
const brewery5 = document.getElementById("brewery5");
const brewery6 = document.getElementById("brewery6");
const brewery7 = document.getElementById("brewery7");
const brewery8 = document.getElementById("brewery8");
const brewery9 = document.getElementById("brewery9");
const brewery10 = document.getElementById("brewery10");
const brewery11 = document.getElementById("brewery11");
const brewery12 = document.getElementById("brewery12");
const brewery13 = document.getElementById("brewery13");
const brewery14 = document.getElementById("brewery14");
const brewery15 = document.getElementById("brewery15");
const brewery16 = document.getElementById("brewery16");
const brewery17 = document.getElementById("brewery17");
const brewery18 = document.getElementById("brewery18");
const brewery19 = document.getElementById("brewery19");
const brewery20 = document.getElementById("brewery20");

const city1 = document.getElementById("city1");
const city2 = document.getElementById("city2");
const city3 = document.getElementById("city3");
const city4 = document.getElementById("city4");
const city5 = document.getElementById("city5");
const city6 = document.getElementById("city6");
const city7 = document.getElementById("city7");
const city8 = document.getElementById("city8");
const city9 = document.getElementById("city9");
const city10 = document.getElementById("city10");
const city11 = document.getElementById("city11");
const city12 = document.getElementById("city12");
const city13 = document.getElementById("city13");
const city14 = document.getElementById("city14");
const city15 = document.getElementById("city15");
const city16 = document.getElementById("city16");
const city17 = document.getElementById("city17");
const city18 = document.getElementById("city18");
const city19 = document.getElementById("city19");
const city20 = document.getElementById("city20");


const phone1 = document.getElementById("phone1");
const phone2 = document.getElementById("phone2");
const phone3 = document.getElementById("phone3");
const phone4 = document.getElementById("phone4");
const phone5 = document.getElementById("phone5");
const phone6 = document.getElementById("phone6");
const phone7 = document.getElementById("phone7");
const phone8 = document.getElementById("phone8");
const phone9 = document.getElementById("phone9");
const phone10 = document.getElementById("phone10");
const phone11 = document.getElementById("phone11");
const phone12 = document.getElementById("phone12");
const phone13 = document.getElementById("phone13");
const phone14 = document.getElementById("phone14");
const phone15 = document.getElementById("phone15");
const phone16 = document.getElementById("phone16");
const phone17 = document.getElementById("phone17");
const phone18 = document.getElementById("phone18");
const phone19 = document.getElementById("phone19");
const phone20 = document.getElementById("phone20");


const add1 = document.getElementById("address1");
const add2 = document.getElementById("address2");
const add3 = document.getElementById("address3");
const add4 = document.getElementById("address4");
const add5 = document.getElementById("address5");
const add6 = document.getElementById("address6");
const add7 = document.getElementById("address7");
const add8 = document.getElementById("address8");
const add9 = document.getElementById("address9");
const add10 = document.getElementById("address10");
const add11 = document.getElementById("address11");
const add12 = document.getElementById("address12");
const add13 = document.getElementById("address13");
const add14 = document.getElementById("address14");
const add15 = document.getElementById("address15");
const add16 = document.getElementById("address16");
const add17 = document.getElementById("address17");
const add18 = document.getElementById("address18");
const add19 = document.getElementById("address19");
const add20 = document.getElementById("address20");

const web1 = document.getElementById("web1");
const web2 = document.getElementById("web2");
const web3 = document.getElementById("web3");
const web4 = document.getElementById("web4");
const web5 = document.getElementById("web5");
const web6 = document.getElementById("web6");
const web7 = document.getElementById("web7");
const web8 = document.getElementById("web8");
const web9 = document.getElementById("web9");
const web10 = document.getElementById("web10");
const web11 = document.getElementById("web11");
const web12 = document.getElementById("web12");
const web13 = document.getElementById("web13");
const web14 = document.getElementById("web14");
const web15 = document.getElementById("web15");
const web16 = document.getElementById("web16");
const web17 = document.getElementById("web17");
const web18 = document.getElementById("web18");
const web19 = document.getElementById("web19");
const web20 = document.getElementById("web20");




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

    // Insert Brewery Name Information
    const name1 = document.createElement("p");
    name1.innerHTML = [0].name;
    brewery1.appendChild(name1);

    const name2 = document.createElement("p");
    name2.innerHTML = [1].name;
    brewery2.appendChild(name2);

    const name3 = document.createElement("p");
    name3.innerHTML = [2].name;
    brewery3.appendChild(name3);

    const name4 = document.createElement("p");
    name4.innerHTML = [3].name;
    brewery4.appendChild(name4);

    const name5 = document.createElement("p");
    name5.innerHTML = [4].name;
    brewery5.appendChild(name5);

    const name6 = document.createElement("p");
    name6.innerHTML = [5].name;
    brewery6.appendChild(name6);

    const name7 = document.createElement("p");
    name7.innerHTML = [6].name;
    brewery7.appendChild(name7);

    const name8 = document.createElement("p");
    name8.innerHTML = [7].name;
    brewery8.appendChild(name8);

    const name9 = document.createElement("p");
    name9.innerHTML = [8].name;
    brewery9.appendChild(name9);

    const name10 = document.createElement("p");
    name10.innerHTML = [9].name;
    brewery10.appendChild(name10);

    const name11 = document.createElement("p");
    name11.innerHTML = [10].name;
    brewery11.appendChild(name11);

    const name12 = document.createElement("p");
    name12.innerHTML = [11].name;
    brewery12.appendChild(name12);

    const name13 = document.createElement("p");
    name13.innerHTML = [12].name;
    brewery13.appendChild(name13);

    const name14 = document.createElement("p");
    name14.innerHTML = [13].name;
    brewery14.appendChild(name14);

    const name15 = document.createElement("p");
    name15.innerHTML = [14].name;
    brewery15.appendChild(name15);

    const name16 = document.createElement("p");
    name16.innerHTML = [15].name;
    brewery16.appendChild(name16);

    const name17 = document.createElement("p");
    name17.innerHTML = [16].name;
    brewery17.appendChild(name17);

    const name18 = document.createElement("p");
    name18.innerHTML = [17].name;
    brewery18.appendChild(name18);

    const name19 = document.createElement("p");
    name19.innerHTML = [18].name;
    brewery19.appendChild(name19);

    const name20 = document.createElement("p");
    name20.innerHTML = [19].name;
    brewery20.appendChild(name20);
}






submitBtn.addEventListener("click", formSubmit);