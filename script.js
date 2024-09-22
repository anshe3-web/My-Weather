const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "a3455615deddd07b3581fcb328f0593e";
const wrapper = document.querySelector(".wrapper")
const cityname = document.querySelector(".cityname")
const temprature = document.querySelector(".celcius")
const weatherreport = document.querySelector(".weather")
const time = document.querySelector(".crrntime")
const input = document.querySelector(".search .box1 input")
const btn = document.querySelector(".search .box1 button")
const feeldetail = document.querySelector(".feeldetail")
const winddetail = document.querySelector(".winddetail")
const raindetail = document.querySelector(".raindetail")
const maxtempdetail = document.querySelector(".maxtempdetail")
const mintempdetail = document.querySelector(".mintempdetail")
const humiditydetaildetail = document.querySelector(".humiddetail")
const weatherdetail = document.querySelector(".weatherdetail")
const back = document.querySelector(".background")
const icon = document.querySelector(".weathericon")
const error = document.querySelector(".error")
const inner2 = document.querySelector(".inner2")
var date = new Date()

//By default this will run at starting

async function startweather(city) {
    var output = await fetch(apiURL + city + `&appid=${apikey}`)
    var data = await output.json();
    console.log(data);
    weatherdetail.innerHTML = data.weather[0].main
    cityname.innerHTML = data.name
    temprature.innerHTML = Math.round(data.main.temp) + "°"
    time.innerHTML = date.toLocaleTimeString()
    humiditydetaildetail.innerHTML = data.main.humidity + "%"
    maxtempdetail.innerHTML = data.main.temp_max + "%"
    mintempdetail.innerHTML = data.main.temp_min + "%"
    winddetail.innerHTML = data.wind.speed + "Km/h"
    feeldetail.innerHTML = Math.round(data.main.feels_like) + " °"
    if (data.weather[0].main == "Clouds") {
        back.style.background = "url(images/cloud1.jpg)"
        back.style.backgroundSize = "cover"
        icon.src = "images/cloud.svg"
    }
    else if (data.weather[0].main == "Rain") {
        back.style.background = "url(images/rain-bg.jpg)"
        back.style.backgroundSize = "cover"
        icon.src = "images/rain.svg"
    }
    else if (data.weather[0].main == "Clear") {
        back.style.background = "url(images/clear-bg.jpg)"
        back.style.backgroundSize = "cover"
        icon.src = "images/clear.svg"
    }
    else if (data.weather[0].main == "Haze") {
        back.style.background = "url(images/mist-bg.jpg)"
        back.style.backgroundSize = "cover"
        icon.src = "images/mist.svg"
    }
    else if (data.weather[0].main == "Sunny") {
        back.style.background = "url(images/sunny-bg.jpg)"
        back.style.backgroundSize = "cover"
        icon.src = "images/sunny.svg"
    }
}
startweather("Gorakhpur")

//End by default 


async function checkweather(city) {
    var output = await fetch(apiURL + city + `&appid=${apikey}`)
    if (output.status == 404) {
        error.style.display = "block"
        inner2.style.display = "none"
    }
    else {
        var data = await output.json();
        console.log(data);
        weatherdetail.innerHTML = data.weather[0].main
        cityname.innerHTML = data.name
        temprature.innerHTML = Math.round(data.main.temp) + "°"
        time.innerHTML = date.toLocaleTimeString()
        humiditydetaildetail.innerHTML = data.main.humidity + "%"
        maxtempdetail.innerHTML = data.main.temp_max + "%"
        mintempdetail.innerHTML = data.main.temp_min + "%"
        winddetail.innerHTML = data.wind.speed + "Km/h"
        feeldetail.innerHTML = Math.round(data.main.feels_like) + " °"
        if (data.weather[0].main == "Clouds") {
            back.style.background = "url(images/cloud1.jpg)"
            back.style.backgroundSize = "cover"
            icon.src = "images/cloud.svg"
        }
        else if (data.weather[0].main == "Rain") {
            back.style.background = "url(images/rain-bg.jpg)"
            back.style.backgroundSize = "cover"
            icon.src = "images/rain.svg"
        }
        else if (data.weather[0].main == "Clear") {
            back.style.background = "url(images/clear-bg.jpg)"
            back.style.backgroundSize = "cover"
            icon.src = "images/clear.svg"
        }
        else if (data.weather[0].main == "Haze") {
            back.style.background = "url(images/mist-bg.jpg)"
            back.style.backgroundSize = "cover"
            icon.src = "images/mist.svg"
        }
        else if (data.weather[0].main == "Sunny") {
            back.style.background = "url(images/sunny-bg.jpg)"
            back.style.backgroundSize = "cover"
            icon.src = "images/sunny.svg"
        }
        error.style.display = "none"
        inner2.style.display = "block"
        inner2.style.display = "flex"
    }

}
btn.addEventListener("click", () => {
    checkweather(input.value)
})

