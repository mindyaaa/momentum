const API_KEY = "ec4afa347d521cf62f7b960346933597";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response =>response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert ("CANNOT FIND YOU :'(!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
