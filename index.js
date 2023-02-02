import {API_KEY} from "../config.js";

const darkMode = document.getElementById('dark');
const lights = Array.from(document.getElementsByClassName('light'));

darkMode.addEventListener('click', () => {
    lights.forEach((light) => {
        if(light.className === "light"){
            light.className = "dark";
        } else{
            light.className = "light";
        }
    });
})

//need to  be able to grab the input from the search
const test = document.querySelector('input').value;
console.log(test);
const submit = document.getElementById('submit');



submit.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = document.querySelector('form')
    const city = e.target.test.value
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
   .then(res => res.json())
   .then(data => todo(data))
   form.reset()
})

function todo(data) {
    const city = document.getElementById('city');
    const temp = document.getElementById('temperature');
    const weather = document.getElementById('weather');
    const img = document.createElement('img');
    const weatherDescr = document.getElementById('weather description');
    

    city.textContent = data.name;
    temp.textContent = Math.round(data.main.temp)
    weather.innerText = capitalizeWords(data.weather[0].description)
    
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    img.alt = 'weather icon'
    weatherDescr.append(img);

    
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


