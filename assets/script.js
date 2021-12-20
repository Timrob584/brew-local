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
            // Result 1
            let name = document.createElement("p");
            let name1 = name.textContent = data[0].name;
            let nameEl1 = document.getElementById("brewery1");
            nameEl1.textContent = name1;

            let phone = document.createElement("p");
            let phone1 = phone.textContent = data[0].phone;
            let phoneEl1 = document.getElementById("phone1");
            phoneEl1.textContent = phone1;

            let add = document.createElement("p");
            let add1 = add.textContent = data[0].street;
            let addEl1 = document.getElementById("address1");
            addEl1.textContent = add1;

            let web = document.createElement("p");
            let web1 = web.textContent = data[0].website_url;
            let webEl1 = document.getElementById("web1");
            webEl1.textContent = web1;

            // Result 2
            let name2 = name.textContent = data[1].name;
            let nameEl2 = document.getElementById("brewery2");
            nameEl2.textContent = name2;

            let phone2 = phone.textContent = data[1].phone;
            let phoneEl2 = document.getElementById("phone2");
            phoneEl2.textContent = phone2;

            let add2 = add.textContent = data[1].street;
            let addEl2 = document.getElementById("address2");
            addEl2.textContent = add2;

            let web2 = web.textContent = data[1].website_url;
            let webEl2 = document.getElementById("web2");
            webEl2.textContent = web2;

            // Result 3
            let name3 = name.textContent = data[2].name;
            let nameEl3 = document.getElementById("brewery3");
            nameEl3.textContent = name3;

            let phone3 = phone.textContent = data[2].phone;
            let phoneEl3 = document.getElementById("phone3");
            phoneEl3.textContent = phone3;

            let add3 = add.textContent = data[2].street;
            let addEl3 = document.getElementById("address1");
            addEl1.textContent = add1;

            let web3 = web.textContent = data[2].website_url;
            let webEl3 = document.getElementById("web3");
            webEl3.textContent = web3;

            // Result 4
            let name4 = name.textContent = data[3].name;
            let nameEl4 = document.getElementById("brewery4");
            nameEl4.textContent = name4;

            let phone4 = phone.textContent = data[3].phone;
            let phoneEl4 = document.getElementById("phone4");
            phoneEl4.textContent = phone4;

            let add4 = add.textContent = data[3].street;
            let addEl4 = document.getElementById("address4");
            addEl4.textContent = add4;

            let web4 = web.textContent = data[3].website_url;
            let webEl4 = document.getElementById("web4");
            webEl4.textContent = web4;

            // Result 5
            let name5 = name.textContent = data[4].name;
            let nameEl5 = document.getElementById("brewery5");
            nameEl5.textContent = name5;

            let phone5 = phone.textContent = data[4].phone;
            let phoneEl5 = document.getElementById("phone5");
            phoneEl5.textContent = phone5;

            let add5 = add.textContent = data[4].street;
            let addEl5 = document.getElementById("address5");
            addEl5.textContent = add5;

            let web5 = web.textContent = data[4].website_url;
            let webEl5 = document.getElementById("web5");
            webEl5.textContent = web5;

            // Result 6
            let name6 = name.textContent = data[5].name;
            let nameEl6 = document.getElementById("brewery6");
            nameEl6.textContent = name6;

            let phone6 = phone.textContent = data[5].phone;
            let phoneEl6 = document.getElementById("phone6");
            phoneEl6.textContent = phone6;

            let add6 = add.textContent = data[5].street;
            let addEl6 = document.getElementById("address6");
            addEl6.textContent = add6;

            let web6 = web.textContent = data[5].website_url;
            let webEl6 = document.getElementById("web6");
            webEl6.textContent = web6;

            // Result 7
            let name7 = name.textContent = data[6].name;
            let nameEl7 = document.getElementById("brewery7");
            nameEl7.textContent = name7;

            let phone7 = phone.textContent = data[6].phone;
            let phoneEl7 = document.getElementById("phone7");
            phoneEl7.textContent = phone7;

            let add7 = add.textContent = data[6].street;
            let addEl7 = document.getElementById("address7");
            addEl7.textContent = add7;

            let web7 = web.textContent = data[6].website_url;
            let webEl7 = document.getElementById("web7");
            webEl7.textContent = web7;

            // Result 8
            let name8 = name.textContent = data[7].name;
            let nameEl8 = document.getElementById("brewery8");
            nameEl8.textContent = name8;

            let phone8 = phone.textContent = data[7].phone;
            let phoneEl8 = document.getElementById("phone8");
            phoneEl8.textContent = phone8;

            let add8 = add.textContent = data[7].street;
            let addEl8 = document.getElementById("address8");
            addEl8.textContent = add8;

            let web8 = web.textContent = data[7].website_url;
            let webEl8 = document.getElementById("web8");
            webEl8.textContent = web8;

            // Result 9
            let name9 = name.textContent = data[8].name;
            let nameEl9 = document.getElementById("brewery9");
            nameEl9.textContent = name9;

            let phone9 = phone.textContent = data[8].phone;
            let phoneEl9 = document.getElementById("phone9");
            phoneEl9.textContent = phone9;

            let add9 = add.textContent = data[8].street;
            let addEl9 = document.getElementById("address9");
            addEl9.textContent = add9;

            let web9 = web.textContent = data[8].website_url;
            let webEl9 = document.getElementById("web9");
            webEl9.textContent = web9;

            // Result 10
            let name10 = name.textContent = data[9].name;
            let nameEl10 = document.getElementById("brewery10");
            nameEl10.textContent = name10;

            let phone10 = phone.textContent = data[9].phone;
            let phoneEl10 = document.getElementById("phone10");
            phoneEl10.textContent = phone10;

            let add10 = add.textContent = data[9].street;
            let addEl10 = document.getElementById("address10");
            addEl10.textContent = add10;

            let web10 = web.textContent = data[9].website_url;
            let webEl10 = document.getElementById("web10");
            webEl10.textContent = web10;

            // Result 11
            let name11 = name.textContent = data[10].name;
            let nameEl11 = document.getElementById("brewery11");
            nameEl11.textContent = name11;

            let phone11 = phone.textContent = data[10].phone;
            let phoneEl11 = document.getElementById("phone11");
            phoneEl11.textContent = phone11;

            let add11 = add.textContent = data[10].street;
            let addEl11 = document.getElementById("address11");
            addEl11.textContent = add11;

            let web11 = web.textContent = data[10].website_url;
            let webEl11 = document.getElementById("web11");
            webEl11.textContent = web11;

            // Result 12
            let name12 = name.textContent = data[11].name;
            let nameEl12 = document.getElementById("brewery12");
            nameEl12.textContent = name12;

            let phone12 = phone.textContent = data[11].phone;
            let phoneEl12 = document.getElementById("phone12");
            phoneEl12.textContent = phone12;

            let add12 = add.textContent = data[11].street;
            let addEl12 = document.getElementById("address12");
            addEl12.textContent = add12;

            let web12 = web.textContent = data[11].website_url;
            let webEl12 = document.getElementById("web12");
            webEl12.textContent = web12;

            // Result 13
            let name13 = name.textContent = data[12].name;
            let nameEl13 = document.getElementById("brewery13");
            nameEl13.textContent = name13;

            let phone13 = phone.textContent = data[12].phone;
            let phoneEl13 = document.getElementById("phone13");
            phoneEl13.textContent = phone13;

            let add13 = add.textContent = data[12].street;
            let addEl13 = document.getElementById("address13");
            addEl13.textContent = add13;

            let web13 = web.textContent = data[12].website_url;
            let webEl13 = document.getElementById("web13");
            webEl13.textContent = web13;

            // Result 14
            let name14 = name.textContent = data[13].name;
            let nameEl14 = document.getElementById("brewery14");
            nameEl14.textContent = name14;

            let phone14 = phone.textContent = data[13].phone;
            let phoneEl14 = document.getElementById("phone14");
            phoneEl14.textContent = phone14;

            let add14 = add.textContent = data[13].street;
            let addEl14 = document.getElementById("address14");
            addEl14.textContent = add14;

            let web14 = web.textContent = data[13].website_url;
            let webEl14 = document.getElementById("web14");
            webEl14.textContent = web14;

            // Result 15
            let name15 = name.textContent = data[14].name;
            let nameEl15 = document.getElementById("brewery15");
            nameEl15.textContent = name15;

            let phone15 = phone.textContent = data[14].phone;
            let phoneEl15 = document.getElementById("phone15");
            phoneEl15.textContent = phone15;

            let add15 = add.textContent = data[14].street;
            let addEl15 = document.getElementById("address15");
            addEl15.textContent = add15;

            let web15 = web.textContent = data[14].website_url;
            let webEl15 = document.getElementById("web15");
            webEl15.textContent = web15;

            // Result 16
            let name16 = name.textContent = data[15].name;
            let nameEl16 = document.getElementById("brewery16");
            nameEl16.textContent = name16;

            let phone16 = phone.textContent = data[15].phone;
            let phoneEl16 = document.getElementById("phone16");
            phoneEl16.textContent = phone16;

            let add16 = add.textContent = data[15].street;
            let addEl16 = document.getElementById("address16");
            addEl16.textContent = add16;

            let web16 = web.textContent = data[15].website_url;
            let webEl16 = document.getElementById("web16");
            webEl16.textContent = web16;

            // Result 17
            let name17 = name.textContent = data[16].name;
            let nameEl17 = document.getElementById("brewery17");
            nameEl17.textContent = name17;

            let phone17 = phone.textContent = data[16].phone;
            let phoneEl17 = document.getElementById("phone17");
            phoneEl17.textContent = phone17;

            let add17 = add.textContent = data[16].street;
            let addEl17 = document.getElementById("address17");
            addEl17.textContent = add17;

            let web17 = web.textContent = data[16].website_url;
            let webEl17 = document.getElementById("web17");
            webEl17.textContent = web17;

            // Result 18
            let name18 = name.textContent = data[17].name;
            let nameEl18 = document.getElementById("brewery18");
            nameEl18.textContent = name18;

            let phone18 = phone.textContent = data[17].phone;
            let phoneEl18 = document.getElementById("phone18");
            phoneEl18.textContent = phone18;

            let add18 = add.textContent = data[17].street;
            let addEl18 = document.getElementById("address18");
            addEl18.textContent = add18;

            let web18 = web.textContent = data[17].website_url;
            let webEl18 = document.getElementById("web18");
            webEl18.textContent = web18;

            // Result 19
            let name19 = name.textContent = data[18].name;
            let nameEl19 = document.getElementById("brewery19");
            nameEl19.textContent = name19;

            let phone19 = phone.textContent = data[18].phone;
            let phoneEl19 = document.getElementById("phone19");
            phoneEl19.textContent = phone19;

            let add19 = add.textContent = data[18].street;
            let addEl19 = document.getElementById("address19");
            addEl19.textContent = add19;

            let web19 = web.textContent = data[18].website_url;
            let webEl19 = document.getElementById("web19");
            webEl19.textContent = web19;

            // Result 20
            let name20 = name.textContent = data[19].name;
            let nameEl20 = document.getElementById("brewery20");
            nameEl20.textContent = name20;

            let phone20 = phone.textContent = data[19].phone;
            let phoneEl20 = document.getElementById("phone20");
            phoneEl20.textContent = phone20;

            let add20 = add.textContent = data[19].street;
            let addEl20 = document.getElementById("address20");
            addEl20.textContent = add20;

            let web20 = web.textContent = data[19].website_url;
            let webEl20 = document.getElementById("web20");
            webEl20.textContent = web20;

        })
}

// Runs OpenBrewery API When State is Searched
function formSubmit(event) {
    event.preventDefault();
    let citySearch = searchInput.value.trim();
    getBreweries(citySearch);
    searchInput.value = "";
}

submitBtn.addEventListener("click", formSubmit);