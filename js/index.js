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

// Animate nav-links on double click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('dblclick', () => {
        link.animate([
            { transform: 'scale(0)' }, 
            { transform: 'scale(1.1)' }
          ], { 
            duration: 500,
            iterations: 1
          });
    });    
});

// Disable right click
document.body.addEventListener('contextmenu', e => {
    e.preventDefault();   
});

