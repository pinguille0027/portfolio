const form = document.getElementById('cta-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('cta-email');
    const content = document.getElementById('cta-body');
    const buttonText = document.getElementById('cta-button');
    const message = document.getElementById('cta-message');

    const details = { 
        email: email.value, 
        content: content.value 
    };


    buttonText.innerHTML = 'Sending...';

    fetch('/api/form', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)

    }).then(() => {
        email.value = '';
        content.value = '';
        message.innerHTML = 'Thank you for submitting !'
        message.style.opacity = 1;

        setTimeout(() => {
            message.innerHTML = '';
            message.style.opacity = 0;
        }, 5000);
    }).finally(() => {
        buttonText.innerHTML = `
            Send
            <img src="./assets/Arrow.svg" alt="arrow">
        `
    });
});

let themeButton = document.getElementById('theme-toggle')
let logoImg = document.getElementById('logo')
let theme = localStorage.getItem('theme');

if (theme=== 'light') {
    document.documentElement.setAttribute('data-theme', theme);
    themeButton.innerHTML = '<img width="25" height="25" src="./assets/botón gc.svg" alt="lightTheme-moon-icon">'
    localStorage.setItem('theme', 'light');
    logo.src='./assets/Logo-light.webp';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeButton.innerHTML = '<img width="25" height="25" src="./assets/botón rc.svg" alt="lightTheme-sun-icon">'
    theme = 'dark';
    localStorage.setItem('theme', 'dark');
}

const switchTheme = () => {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeButton.innerHTML = '<img width="50" height="50" src="./assets/botón gr.svg" alt="boton-tema-claro">'
        logo.src='./assets/botón gr.svg';
        theme = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeButton.innerHTML = '<img width="25" height="25" src="./assets/botón rc.svg" alt="boton-tema-oscuro">'
        logo.src='./assets/botón rc.svg';
        theme = 'dark';
        localStorage.setItem('theme', 'dark');
    } 
}

themeButton.addEventListener('click', switchTheme)