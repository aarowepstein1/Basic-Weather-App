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
const test = document.querySelector('input').innerHTML;
console.log(test);
const submit = document.getElementById('submit');
submit.addEventListener('cick', () => {
   console.log(submit)
    fetch(`url/${submit}`)
   .then(res => res.json)
   //.then(data => )
})