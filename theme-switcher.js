const switchButton = document.getElementById('button-switcher');
const bgColor = document.getElementsByTagName('body')[0];
const gText = document.getElementById('greetings-text');


function switchTheme() {
    if(bgColor.classList.contains('light')) {
        gText.style.color = "var(--light)";
        gText.getElementsByTagName('span')[0].textContent = "Good night!";
        switchButton.style.transform = "translate(20px, -30px)";
        bgColor.classList.remove('light')
        bgColor.classList.add('dark');
    } else {
        switchButton.style.transform = "translate(-20px, -30px)";
        gText.style.color = "var(--dark)";
        gText.getElementsByTagName('span')[0].textContent = "Good day!";
        bgColor.classList.remove('dark')
        bgColor.classList.add('light');
    }
};

/* function animateText() {
    if(gText.classList.contains('animate-text')) {
        gText.classList.remove('animate-text');
    } else {
        gText.classList.add('animate-text');
    };
}; */

function animateText() {
    gText.classList.toggle('animate');
}