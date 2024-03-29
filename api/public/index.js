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

    fetch('/mensaje', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)

    }).then(() => {
        email.value = '';
        content.value = '';
        message.innerHTML = 'Gracias !'
        message.style.opacity = 1;

        setTimeout(() => {
            message.innerHTML = '';
            message.style.opacity = 0;
        }, 5000);
    }).finally(() => {
        buttonText.innerHTML = `Enviar`
    });
});

let themeButton = document.getElementById('theme-toggle')
let academiaboton = document.getElementById('academia')
let linkedinboton = document.getElementById('linkedin')
let githubboton = document.getElementById('github')
let logoImg = document.getElementById('logo')
let rectanguloecb = document.getElementById("rectangulo encabezado")
let theme = localStorage.getItem('theme');

if (theme=== 'light') {
    document.documentElement.setAttribute('data-theme', theme);
    themeButton.innerHTML = '<img width="50" height="50" src="./assets/boton gr.svg" alt="lightTheme-moon-icon">'
    rectanguloecb.src="./assets/Rectangulo gr.svg"
    academiaboton.src="./assets/academia gr.svg"
    linkedinboton.src="./assets/linkedin gr.svg"
    githubboton.src="./assets/github gr.svg"
    localStorage.setItem('theme', 'light');
    logo.src='./assets/junco gr.svg';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeButton.innerHTML = '<img width="50" height="50" src="./assets/boton rc.svg" alt="lightTheme-sun-icon">'
    rectanguloecb.src="./assets/Rectangulo rc.svg"
    academiaboton.src="./assets/academia rc.svg"
    linkedinboton.src="./assets/linkedin rc.svg"
    githubboton.src="./assets/github rc.svg"
    theme = 'dark';
    localStorage.setItem('theme', 'dark');
}

const switchTheme = () => {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeButton.innerHTML = '<img width="50" height="50" src="./assets/boton gr.svg" alt="boton-tema-claro">'
        logo.src='./assets/junco gr.svg';
        academiaboton.src="./assets/academia gr.svg";
        linkedinboton.src="./assets/linkedin gr.svg";
        githubboton.src="./assets/github gr.svg";
        rectanguloecb.src="./assets/Rectangulo gr.svg";
        theme = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeButton.innerHTML = '<img width="50" height="50" src="./assets/boton rc.svg" alt="boton-tema-oscuro">'
        logo.src='./assets/junco rc.svg';
        academiaboton.src="./assets/academia rc.svg";
        linkedinboton.src="./assets/linkedin rc.svg";
        githubboton.src="./assets/github rc.svg";
        rectanguloecb.src="./assets/Rectangulo rc.svg";
        theme = 'dark';
        localStorage.setItem('theme', 'dark');
    } 
}

themeButton.addEventListener('click', switchTheme)
