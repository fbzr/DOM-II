// Your code goes here

// Add popup when page loads
window.addEventListener('load', () => {
    alert('Welcome to Fun Bus!!');
});

// Add event listner to change nav background color when scroll
const changeNavColor = e => {    
    const nav = document.querySelector('header.main-navigation');
    const navHeight = 90; // parseInt(nav.style.height);

    if ((document.body.scrollTop >= navHeight || document.documentElement.scrollTop >= navHeight)) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', changeNavColor);

// Disable right click
document.body.addEventListener('contextmenu', e => {
    e.preventDefault();   
});

