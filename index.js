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
fetch(`https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=${API_KEY}&units=imperial`)
   .then(res => res.json())
   .then(data => console.log(data.main.temp))
//need to  be able to grab the input from the search
const test = document.querySelector('input').value;
console.log(test);
const submit = document.getElementById('submit');
const phoenix = 'phoenix'


submit.addEventListener('click', (e) => {
   console.log(e.target.value)
   const temp = document.getElementById('temperature')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${phoenix}&appid=${API_KEY}`)
   .then(res => res.json())
   .then(data => () => {
    temp.innerHTML = data.main.temp;
   })
})
