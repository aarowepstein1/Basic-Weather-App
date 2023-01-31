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
fetch(`https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=${API_KEY}`)
   .then(res => res.json())
   .then(data => console.log(data))
//need to  be able to grab the input from the search
const test = document.querySelector('input').value;
console.log(test);
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
   console.log(e.target.value)
   console.log(test)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=${API_KEY}`)
   .then(res => res.json())
   .then(data => console.log(data))
})