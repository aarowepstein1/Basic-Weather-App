import {API_KEY} from "../config.js";

const darkMode = document.getElementById('dark');
const body = document.querySelector('body');
const lights = Array.from(document.getElementsByClassName('light'));


darkMode.addEventListener('click', () => {
    
    if(body.className === "normal") {
        body.className = "dark";
    } else {
        body.className = "normal";
    }
    lights.forEach((light) => {
        if(light.className === "light"){
            light.className = "test";
        } else{
            light.className = "light";
        }
    });
    if(darkMode.className === 'sol') {
        darkMode.src = "Sources/Mr2MLY01.svg";
        darkMode.className = 'moon';
    } else {
        darkMode.src = "Sources/8rEhad01.svg";
        darkMode.className = 'sol';
    }
})

//need to  be able to grab the input from the search
const submit = document.getElementById('submit');
//


submit.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = document.querySelector('form')
    const city = e.target.test.value

    //weather api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
   .then(res => res.json())
   .then(data => todo(data))
   
   
    form.reset()

})

function todo(data) {
    const city = document.getElementById('city');
    const temp = document.getElementById('temperature');
    const weather = document.getElementById('weather');
    const img = document.getElementById('icon');
    


    //This is the main part of the return
    city.textContent = data.name;
    temp.textContent = `${Math.round(data.main.temp)} F`
    weather.innerText = capitalizeWords(data.weather[0].description)
    
    
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    img.alt = 'weather icon'
    


    // this is for the more information event listener
    const moreInfo = document.getElementById('moreInfo');
    const speed = document.getElementById('speed');
    const direction = document.getElementById('direction')
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    
    speed.textContent = `Wind Speed: ${data.wind.speed} MPH`;
    direction.textContent = `Wind Direction: ${degToCompass(data.wind.deg)}`
    sunrise.textContent = `Sunrise: ${convertUnix(data.sys.sunrise)} AM`;
    sunset.textContent = `Sunset: ${convertUnix(data.sys.sunset)} PM`;    

    wind.addEventListener('mouseover', () => {
        if(moreInfo.style.display === 'block') {
            moreInfo.style.display = 'none';
        } else {
            moreInfo.style.display = 'block';
        }
    })
    
}


function convertUnix(unix) {
    const unixTimestamp = unix;
    const date = new Date(unixTimestamp * 1000);
    let hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    if (hours >= 13) {
       hours = hours - 12;
    }

    const formatTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formatTime;
}


//need to capitalize the first letters of this string ie scattered clouds make Scattered Clouds
function capitalizeWords(string) {
    const word = string.split(" ");

    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }

    const words = word.join(" ");
    return words;
}


//this converts the degrees to a cardinal direction
function degToCompass(num) {
    const dir = parseInt((num/22.5) + .5)
    const arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
    return arr[(dir % 16)];
}

