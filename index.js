const darkMode = document.getElementById('dark');
const lights = Array.from(document.getElementsByClassName('light'));
console.log(lights)
darkMode.addEventListener('click', () => {
    lights.forEach((light) => {
        if(light.className === "light"){
            light.className = "dark";
            console.log(light.className)
        } else{
            light.className = "light";
        }
    });
})