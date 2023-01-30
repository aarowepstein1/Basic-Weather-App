const darkMode = document.getElementById('dark');
const body = document.querySelector('body');

darkMode.addEventListener('click', () => {
    body.classList.toggle('dark');
})